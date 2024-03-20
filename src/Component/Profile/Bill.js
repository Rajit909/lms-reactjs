const Bill = () => {
  return (
    <div class="container" id="bill">
      <div class="brand-section">
        <div class="row">
          <div class="col-6">
            <h1 class="text-white">LMS</h1>
          </div>
          <div class="col-6">
            <div class="company-details">
              <p class="text-white">xxxxxx yyy xxxx yyyyy x yy</p>
              <p class="text-white">xxxxxx yyy xxx</p>
              <p class="text-white">+91 0123456789</p>
            </div>
          </div>
        </div>
      </div>

      <div class="body-section">
        <div class="row">
          <div class="col-6">
            <h2 class="heading">Invoice No.: 001</h2>
            <p class="sub-heading">Tracking No. LMS1011</p>
            <p class="sub-heading">Order Date: 20-20-2021</p>
            <p class="sub-heading">Email Address: lmscustomer@gfmail.com</p>
          </div>
          <div class="col-6">
            <p class="sub-heading">Full Name:</p>
            <p class="sub-heading">Address:</p>
            <p class="sub-heading">Phone Number:</p>
            <p class="sub-heading">City,State,Pincode:</p>
          </div>
        </div>
      </div>

      <div class="body-section">
        <h3 class="heading">Ordered Items</h3>
        <br />
        <table class="table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th class="w-20">Price</th>
              <th class="w-20">Quantity</th>
              <th class="w-20">Grandtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td>10</td>
              <td>1</td>
              <td>10</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Sub Total
              </td>
              <td>10.XX</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Tax Total %1X
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Grand Total
              </td>
              <td>12.XX</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3 class="heading">Payment Status: Paid</h3>
        <h3 class="heading">Payment Mode: Paytm</h3>
      </div>

      <div class="body-section">
        <p>
          &copy; Copyright Your Website
          {/* <!-- <a href="https://www.fundaofwebit.com/" class="float-right"
      >www.fundaofwebit.com</a
    > --> */}
        </p>
      </div>
    </div>
  );
};

export default Bill;
