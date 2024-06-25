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
          Vasagatan 16
          <br />
          111 20, Stockholm
        </Office>
      </li>
      <li>
        <Office name="Spain" invert={invert}>
        Cra de S. Jerónimo 17
          <br />
          28014, Madrid
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
