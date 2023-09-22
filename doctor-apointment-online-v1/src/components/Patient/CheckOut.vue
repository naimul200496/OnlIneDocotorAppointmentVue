<template>
  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-8">
          <div class="card">
            <div class="card-body">
              <!-- Checkout Form -->
              <form>
                <!-- Personal Information -->
                <div class="info-widget">
                  <h4 class="card-title">Personal Information</h4>
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group card-label">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" required />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group card-label">
                        <label>Last Name<span class="text-danger">*</span></label>
                        <input class="form-control" type="text" required />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group card-label">
                        <label>Email<span class="text-danger">*</span></label>
                        <input class="form-control" type="email" required />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group card-label">
                        <label>Phone<span class="text-danger">*</span></label>
                        <input class="form-control" type="text" required />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Personal Information -->

                <div class="payment-widget">
                  <h4 class="card-title">Payment Method</h4>

                  <!-- Credit Card Payment -->
                  <div class="payment-list">
                    <label class="payment-radio credit-card-option">
                      <input type="radio" name="radio" checked />
                      <span class="checkmark"></span>
                      Credit card
                    </label>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group card-label">
                          <label for="card_name"
                            >Name on Card<span class="text-danger">*</span></label
                          >
                          <input class="form-control" id="card_name" type="text" required />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group card-label">
                          <label for="card_number"
                            >Card Number<span class="text-danger">*</span></label
                          >
                          <input
                            class="form-control"
                            id="card_number"
                            placeholder="1234  5678  9876  5432"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group card-label">
                          <label for="expiry_month"
                            >Expiry Month<span class="text-danger">*</span></label
                          >
                          <input
                            class="form-control"
                            id="expiry_month"
                            placeholder="MM"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group card-label">
                          <label for="expiry_year"
                            >Expiry Year<span class="text-danger">*</span></label
                          >
                          <input
                            class="form-control"
                            id="expiry_year"
                            placeholder="YY"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group card-label">
                          <label for="cvv">CVV<span class="text-danger">*</span></label>
                          <input class="form-control" id="cvv" type="text" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Credit Card Payment -->

                  <!-- Paypal Payment -->
                  <div class="payment-list">
                    <label class="payment-radio paypal-option">
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                      Paypal
                    </label>
                  </div>
                  <!-- /Paypal Payment -->

                  <!-- Terms Accept -->
                  <div class="terms-accept">
                    <div class="custom-checkbox">
                      <input type="checkbox" id="terms_accept" />
                      <label for="terms_accept"
                        >I have read and accept <a href="#">Terms &amp; Conditions</a></label
                      >
                    </div>
                  </div>
                  <!-- /Terms Accept -->

                  <!-- Submit Section -->
                  <div class="submit-section mt-4">
                    <button
                      type="submit"
                      class="btn btn-primary submit-btn"
                      @click.prevent="Confirm()"
                    >
                      Confirm and Pay
                    </button>
                  </div>
                  <!-- /Submit Section -->
                </div>
              </form>
              <!-- /Checkout Form -->
            </div>
          </div>
        </div>

        <div class="col-md-5 col-lg-4 theiaStickySidebar">
          <!-- Booking Summary -->
          <div class="card booking-card">
            <div class="card-header">
              <h4 class="card-title">Booking Summary</h4>
            </div>
            <div class="card-body">
              <!-- Booking Doctor Info -->
              <div class="booking-doc-info">
                <a href="doctor-profile.html" class="booking-doc-img">
                  <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                </a>
                <div class="booking-info">
                  <h4>
                    <a href="doctor-profile.html">Dr. {{ docnname }}</a>
                  </h4>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">35</span>
                  </div>
                  <div class="clinic-details">
                    <p class="doc-location">
                      <i class="fas fa-map-marker-alt"></i> {{ doclocation }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Booking Doctor Info -->

              <div class="booking-summary">
                <div class="booking-item-wrap">
                  <ul class="booking-date">
                    <li>
                      Date <span>{{ Date1 }}</span>
                    </li>
                    <li>
                      Time <span>{{ timeSlot }}</span>
                    </li>
                  </ul>
                  <ul class="booking-fee">
                    <li>
                      Consulting Fee <span>${{ docpricing }}</span>
                    </li>
                    <li>
                      Booking Fee <span>${{ bookingFee }}</span>
                    </li>
                    <!-- <li>Video Call <span>$50</span></li> -->
                  </ul>
                  <div class="booking-total">
                    <ul class="booking-total-list">
                      <li>
                        <span>Total</span>
                        <span class="total-cost">${{ this.totalAmt }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Booking Summary -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Content -->

  <!-- Add Modal -->
  <div
    v-if="OpenClose"
    class="modal fade show"
    aria-modal="true"
    id="acknowledgement"
    role="dialog"
    style="display: block"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Are You sure you want to Pay for this Booking?</h5>
          <button type="button" @click="closeFunction()" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <slot>
              <div class="row form-row">
                <div class="col-12 col-sm-6">
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      @click.prevent="confirm_yes()"
                    >
                      Yes
                    </button>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-secondary btn-block"
                      @click.prevent="closeFunction()"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </slot>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /ADD Modal -->
</template>
<script>
import { useStoreCheckOut } from '../../stores/StoreCheckout.js'
import { userUserStore } from '../../stores/userStore.js'
import { AddAppointmentInfo } from '../../Services/userFirebase.js'
export default {
  name: 'CheckOut',
  data() {
    return {
      OpenClose: this.visible,
	  appointmentinfo:null,
      checkoutInfo: null,
      userInfo: null,
      totalAmt: 0,
      bookingFee: 15,
      docnname: '',
      doclocation: '',
      Date1: '',
      timeSlot: '',
      docpricing: ''
    }
  },
  props: {
    visible: Boolean,
    varriant: String
  },
  setup() {
    const checkoutStore = useStoreCheckOut()
    const userstoreInfo = userUserStore()
    return { checkoutStore, userstoreInfo }
  },
  async mounted() {
    this.checkoutInfo = await this.checkoutStore.getCheckOutInfo
    this.userInfo = this.userstoreInfo.userInfo
    ;(this.docnname = this.checkoutInfo.docnname),
      (this.doclocation = this.checkoutInfo.doclocation),
      (this.Date1 = this.checkoutInfo.Date),
      (this.timeSlot = this.checkoutInfo.timeSlot),
      (this.docpricing = this.checkoutInfo.docpricing),
      (this.totalAmt = parseFloat(this.checkoutInfo.docpricing) + parseFloat(this.bookingFee))
    console.log('CheckoutInfo', this.checkoutInfo)
    console.log('UserInfo', this.userInfo)
  },
  methods: {
    Confirm() {
      this.OpenClose = !this.OpenClose
    },
    async confirm_yes() {
      // const doctId={iid:this.doctorId}
	  console.log('CheckoutInfi',this.checkoutInfo)
	  console.log('userInfo',this.userInfo)
	  this.appointmentinfo={
		document_id:`${this.checkoutInfo.docid}_${this.checkoutInfo.Date}_${this.checkoutInfo.timeSlot}`,
		bookingDate:'',
		appointmentDate:this.Date1,
		appointmentTime:this.timeSlot,
		payment:'Paid',
		totalAmount:this.totalAmt,
		patientId:this.userInfo.uid,
    doctorId:this.checkoutInfo.docid

	  }
	  await AddAppointmentInfo(this.appointmentinfo)
      this.$router.push({ name: 'BookingConfirmation' })
      this.OpenClose = !this.OpenClose
    },
    closeFunction() {
      this.OpenClose = !this.OpenClose
    }
  }
}
</script>
