import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Sweden" invert={invert}>
          Sveavägen 456
          <br />
          567 89, Stockholm
        </Office>
      </li>
      <li>
        <Office name="Spain" invert={invert}>
          Calle Gran Via 123
          <br />
          28013, Madrid
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
