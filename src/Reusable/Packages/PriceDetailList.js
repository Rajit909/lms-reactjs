import PriceDetail from "./PriceDetail";

const PriceDetailList = () => {
  return (
    <>
      <h3 class="pack">Package</h3>
      <div class="price row">
        <PriceDetail />
        <PriceDetail />
        <PriceDetail />
        <PriceDetail />
      </div>
    </>
  );
};

export default PriceDetailList;
