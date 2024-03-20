const FeaturesList = (props) => {
  return (
    <div class="features col-md-5">
      <h1>
        <span style={{ textTransform: "capitalize" }}>{props.type}</span> -
        Features
      </h1>
      <ul class="feature-details">
        {props.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
