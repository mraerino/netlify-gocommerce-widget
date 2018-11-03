import { h, Component } from "preact";
import { connect } from "mobx-preact";
import StripeCard from "./stripe";
import PaypalButton from "./paypal";

@connect(["store"])
export default class Payment extends Component {
  componentWillMount() {
    if (!this.props.methods) {
      this.props.onLoadMethods();
    }
  }

  handleStripe = (stripe, card, data) => {
    this.props.onUpdatePaymentMethod(data.complete, () =>
      stripe.createToken(card).then(result => {
        if (result.error) {
          throw result.error;
        }

        return {
          result,
          provider: "stripe"
        }
      })
    );
  };

  handlePaypal = data => {
    this.props.onUpdatePaymentMethod(true, () =>
      Promise.resolve({ result: data, provider: "paypal" })
    );
    this.props.store.setPage("confirm");
  };

  renderStripe() {
    const { stripe } = this.props.methods;

    if (!stripe.enabled) return null;

    if (!stripe.loaded) {
      return null;
    }

    return (
      <StripeCard publicKey={stripe.public_key} onStripe={this.handleStripe} />
    );
  }

  renderPaypal() {
    const { methods, cart } = this.props;
    const { paypal } = methods;

    if (!paypal.enabled) return null;

    if (!paypal.loaded) {
      return null;
    }

    return (
      <PaypalButton
        env={paypal.env}
        url={paypal.url}
        amount={cart && cart.total.amount}
        currency={cart && cart.total.currency}
        onPaypal={this.handlePaypal}
      />
    );
  }

  render() {
    if (!this.props.methods) {
      return <p>Loading...</p>;
    }

    return (
      <div className="paymentMethods">
        {this.renderStripe()}
        {this.renderPaypal()}
      </div>
    );
  }
}
