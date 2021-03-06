import { h, Component } from "preact";
import Field from "../forms/field";
import SuggestionsField from "../forms/suggesions-field";
import Payment from "../payment";
import countries from "../forms/countries.json";
import states from "../forms/states.json";

export default class Details extends Component {
  handleInput = e => {
    this.props.onDetails(e.target.name, e.target.value);
  };

  render() {
    const {
      cart,
      details,
      methods,
      onLoadMethods,
      onUpdatePaymentMethod
    } = this.props;
    const statesForCountry = states[details.billing_country];

    return (
      <form className="addressForm">
        <Field
          label="Enter your email"
          name="email"
          type="email"
          value={details.email}
          placeholder="Email"
          autocapitalize="off"
          required
          onInput={this.handleInput}
        />

        <Field
          label="Name"
          name="billing_full_name"
          value={details.billing_full_name}
          placeholder="Full Name"
          required
          onInput={this.handleInput}
        />

        <Field
          label="Company (optional)"
          name="billing_company"
          value={details.billing_company}
          placeholder="Company"
          onInput={this.handleInput}
        />

        <Field
          className="twoColumns"
          label="Street Address"
          name="billing_address1"
          value={details.billing_address1}
          placeholder="Address"
          required
          onInput={this.handleInput}
        />

        <Field
          label="App / Suite (Optional)"
          name="billing_address2"
          value={details.billing_address2}
          placeholder="App / suite"
          onInput={this.handleInput}
        />

        <Field
          className="twoColumns"
          label="City"
          name="billing_city"
          value={details.billing_city}
          placeholder="City"
          required
          onInput={this.handleInput}
        />

        <Field
          label="Postal Code"
          name="billing_zip"
          value={details.billing_zip}
          placeholder="Zip"
          required
          onInput={this.handleInput}
        />

        <SuggestionsField
          className="twoColumns"
          label="Country"
          name="billing_country"
          value={details.billing_country}
          options={countries}
          placeholder="Country"
          required
          onInput={this.handleInput}
        />

        <SuggestionsField
          label="State"
          name="billing_state"
          value={statesForCountry ? details.billing_state : ""}
          options={statesForCountry ? statesForCountry.states : []}
          disabled={!statesForCountry}
          placeholder="State"
          required
          onInput={this.handleInput}
        />

        <hr className="hr" />

        <Payment
          methods={methods}
          cart={cart}
          onLoadMethods={onLoadMethods}
          onUpdatePaymentMethod={onUpdatePaymentMethod}
        />
      </form>
    );
  }
}
