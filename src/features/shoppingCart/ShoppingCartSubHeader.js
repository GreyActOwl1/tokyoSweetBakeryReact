import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const ShoppingCartSubHeader = ({ activeForm, setActiveForm }) => {
  return (
    <>
      <Breadcrumb className="cart-header">
        <BreadcrumbItem active={activeForm === 1} className="cart-header">
          <a
            href={activeForm === 1 ? null : "#"}
            onClick={() => {
              setActiveForm(1);
            }}
          >
            Shopping Cart
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active={activeForm === 2} className="cart-header">
          <a
            href={activeForm === 2 ? null : "#"}
            onClick={() => {
              setActiveForm(2);
            }}
          >
            Shipping Details
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active={activeForm === 3} className="cart-header">
          <a
            href={activeForm === 3 ? null : "#"}
            onClick={() => {
              setActiveForm(3);
            }}
          >
            Payment Options
          </a>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default ShoppingCartSubHeader;
