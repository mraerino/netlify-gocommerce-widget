import { h, Component } from "preact";
import Field from "../forms/field";

export default class Details extends Component {
  handleInput = (e) => {
    console.log('handle', e);
    this.props.onDetails(e.target.name, e.target.value);
  };

  render() {
    const { details } = this.props;

    console.log(details);

    return (
      <form>
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
        <hr className="hr" />
        <Field
          label="Name"
          name="billing_full_name"
          value={details.billing_full_name}
          placeholder="Full Name"
          required
          onInput={this.handleInput}
        />

        <Field
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
          label="App / Suite (optional)"
          name="billing_address2"
          value={details.billing_address2}
          placeholder="App / suite"
          onInput={this.handleInput}
        />

        <Field
          label="Country"
          name="billing_country"
          value={details.billing_country}
          placeholder="Country"
          required
          onInput={this.handleInput}
        />

        <Field
          label="State"
          name="billing_state"
          value={details.billing_state}
          placeholder="State"
          required
          onInput={this.handleInput}
        />

        <Field
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

        <Field
          label="Company (optional)"
          name="billing_company"
          value={details.billing_company}
          placeholder="Company"
          onInput={this.handleInput}
        />
      </form>
    );
  }
}