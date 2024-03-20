import $ from "jquery";
import "../../Pages/Profile.css";

const BillGenerate = (props) => {
  $("#show-sidebar").click(function () {
    $("#sidebarWrapper").toggle();
  });

  function printExternal() {
    // console.log("print");
    window.print();
  }

  return (
    <div class="page-content">
      <main class="container-fluid">
        <section class="main-profile">
          <div class="row table-head m-0">
            <div class="col-md-12 tab">
              {/* <div class="row head">
                <p>Package Name</p>
                <p>Purchase Date</p>
                <p>Due Date</p>
                <p>Status</p>
                <p>Action</p>
              </div> */}
              {props.authCtx !== undefined && props.authCtx.user !== null && (
                <div class="row middle">
                  <p style={{ textTransform: "capitalize" }}>
                    {props.authCtx.user.package.name}
                  </p>
                  <p>
                    {new Date(
                      parseInt(props.authCtx.user.package.purchaseDate)
                    ).toLocaleDateString()}
                  </p>
                  <p>
                    {new Date(
                      parseInt(props.authCtx.user.package.dueDate)
                    ).toLocaleDateString()}
                  </p>
                  <p style={{ textTransform: "uppercase" }}>
                    {props.authCtx.user.package.status}
                  </p>
                  <p onClick={printExternal}>
                    <span>
                      <b>Generate Bill</b>
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      {/* <!-- END .container-fluid --> */}

      {/* <!-- END .page-content --> */}
    </div>
  );
};

export default BillGenerate;
