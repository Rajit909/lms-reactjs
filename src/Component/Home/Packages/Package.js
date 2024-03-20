import { useState, useEffect } from "react";
import FeaturesList from "../../../Reusable/Packages/FeaturesList";
import ImagesCarousel from "../../../Reusable/Packages/ImagesCarousel";
import PriceDetailList from "../../../Reusable/Packages/PriceDetailList";
import Navbar from "../Navbar";

const Package = (props) => {
  const [packages, setPackages] = useState(null);
  // const [packages, setPackages] = useState({
  //   basic: {
  //     features: [],
  //     images: [],
  //     priceList: []
  //   },
  //   secondary: {
  //     features: [],
  //     images: [],
  //     priceList: []
  //   },
  //   premium: {
  //     features: [],
  //     images: [],
  //     priceList: []
  //   }
  // });

  useEffect(() => {
    console.log("props.type", props.type, packages);
    setPackages((prevState) => {
      return {
        basic: {
          features: [
            "Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text",
            " Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
          ],
          images: [
            "lms1.png",
            "lms2.png",
            "lms3.png",
            "lms4.png",
            "lms6.png",
            "lms7.png",
            "lms8.png",
            "lms9.png"
          ],
          priceList: [
            {
              name: "Lorem Ipsum",
              type: "Free Trial",
              buttonText: "Try Now"
            },
            {
              name: "Lorem Ipsum",
              type: "299&nbsp;/&nbsp;month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "499&nbsp;/&nbsp;3 month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "999&nbsp;/&nbsp;Year",
              buttonText: "Buy Now"
            }
          ]
        },
        secondary: {
          features: [
            "Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text",
            " Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
          ],
          images: [
            "lms1.png",
            "lms2.png",
            "lms3.png",
            "lms4.png",
            "lms6.png",
            "lms7.png",
            "lms8.png",
            "lms9.png"
          ],
          priceList: [
            {
              name: "Lorem Ipsum",
              type: "Free Trial",
              buttonText: "Try Now"
            },
            {
              name: "Lorem Ipsum",
              type: "299&nbsp;/&nbsp;month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "499&nbsp;/&nbsp;3 month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "999&nbsp;/&nbsp;Year",
              buttonText: "Buy Now"
            }
          ]
        },
        premium: {
          features: [
            "Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text",
            " Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
          ],
          images: [
            "lms1.png",
            "lms2.png",
            "lms3.png",
            "lms4.png",
            "lms6.png",
            "lms7.png",
            "lms8.png",
            "lms9.png"
          ],
          priceList: [
            {
              name: "Lorem Ipsum",
              type: "Free Trial",
              buttonText: "Try Now"
            },
            {
              name: "Lorem Ipsum",
              type: "299&nbsp;/&nbsp;month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "499&nbsp;/&nbsp;3 month",
              buttonText: "Buy Now"
            },
            {
              name: "Lorem Ipsum",
              type: "999&nbsp;/&nbsp;Year",
              buttonText: "Buy Now"
            }
          ]
        }
      };
    });
  }, []);

  let ui = null;
  if (packages === null) {
    ui = <p>Loading!!!</p>;
  } else {
    ui = (
      <section class="main-banner bg-img basic">
        <div class="service-row row basic-content">
          <FeaturesList
            type={props.type}
            features={
              props.type === "basic"
                ? packages.basic.features
                : props.type === "secondary"
                ? packages.secondary.features
                : packages.premium.features
            }
          />
          <ImagesCarousel
            type={props.type}
            images={
              props.type === "basic"
                ? packages.basic.images
                : props.type === "secondary"
                ? packages.secondary.images
                : packages.premium.images
            }
          />
        </div>
        <PriceDetailList
          type={props.type}
          PriceDetailList={
            props.type === "basic"
              ? packages.basic.priceList
              : props.type === "secondary"
              ? packages.secondary.priceList
              : packages.premium.priceList
          }
        />
      </section>
    );
  }

  return (
    <>
      <Navbar />
      {ui}
    </>
  );
};

export default Package;
