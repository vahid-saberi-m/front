<template>
  <div class="" style="text-align: right; direction: rtl">

    <BalatarHeader/>
    <div class="whole-page">
      <div class="card bg-warning" v-if="companyId">
        <div class="card-body">{{name}} عزیز تقاضای افزوده شدن شما در انتظار تایید مسوول مربوطه می باشد.</div>
      </div>
      <div class="card  choose-company-container" v-if="!companyId" style=" border-radius: 10px ">
        <p class="container-title" v-if="!set">{{name}} عزیز. آیا می خواهید یک سایت استخدامی جدید بسازید یا اینکه دوست
          دارید به جمع
          کاربران سایت
          استخدامی شرکتی بپیوندید؟</p>
        <div class=" choose-action" v-if="!set">
          <div class="card explanation">
            <b>ساخت یک سایت استخدامی جدید</b>
            <img src="../../assets/images/buildPage.png" class="action-img"/>
            <p>
              چنانچه شرکت یا سازمان شما نیاز به ایجاد یک سایت استخدامی دارد از این طریق می توانید یک سایت
              استخدامی بسازید.
            </p>
            <button class="btn btn-success success" @click="set=1 ; newCompany=1">سایت استخدامی جدید
            </button>
          </div>
          <div class="card explanation">
            <b>عضویت در سایت استخدامی ساخته شده </b>
            <img src="../../assets/images/joinPage.jpg" class="action-img"/>
            <p>
              چنانچه شرکت یا سازمان شما از مشتریان ما است و می خواهید بعنوان کاربر به سایت استخدامی سازمان
              خود اضافه گردید از این طریق اقدام فرمایید.
            </p>
            <button class="btn btn-success" @click="set=1 ; newCompany=0">پیوستن به سایت استخدامی</button>
          </div>
        </div>


        <form v-if="!newCompany&&set" class="form-group" enctype="multipart/form-data">
          <div class="card-header card" style=" border-radius: 10px ">
            <label for="company_id">
              <h5>لطفا اطلاعات زیر را وارد کنید:</h5>
            </label>
          </div>
          <div class="card">
            <div class="card-body ">
              <label for="company_id"><strong>کد شرکت خود را وارد کنید:</strong></label>
              <input type="number" required class="input-group col-2" id="company_id" v-model="company_id"
                     @input="searchCompany"/>
              <span class="badge badge-info col-4"
                    style="font-size: medium; margin-top: 10px; margin-right: 10px">{{companyName}}</span>
              <br>
              <label for="position">
                <strong> رده سازمانی:</strong>
              </label>
              <input type="text" required class="input-group col-2" id="position" v-model="position"/>
              <label for="image"><strong> عکس:</strong></label>
              <input type="file" class="form-control-file col-2" id="image" name="image" accept="image/*"
                     required @change="onFileSelected"/>
              <button type="button" class="btn btn-primary" style="margin-top: 10px" @click="joinCompany">
                ثبت
                اطلاعات
              </button>
            </div>
          </div>
        </form>

        <div class="card-header" v-if="set">
          <p v-if="step===1 " class="container-title">اطلاعات عمومی شرکت:</p>
          <p v-if="step===2" class="container-title">اطلاعاتی در جهت جذب بیشتر کارجو:</p>
          <p v-if="step===3" class="container-title">پیام منابع انسانی:</p>
        </div>
        <div class="card-body main-form">
          <form v-if="newCompany&&set" enctype="multipart/form-data" class="main-form">
            <div class="row" v-if="step===1">
              <div class="col-md-6 card-body border form-section">
                <div class="form-group">
                  <label for="name">نام شرکت شما:</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp"
                         placeholder="نام شرکت " v-model="Name">
                </div>
                <div class="form-group">
                  <label for="email">ایمیل شرکت:</label>
                  <input type="email" class="form-control" id="email" placeholder="email"
                         v-model="Email">
                </div>
                <div class="form-check">
                  <label for="size">تعداد پرسنل:</label>
                  <input type="number" class="form-control" id="size" placeholder="50"
                         v-model="company_size">
                </div>
                <div class="form-check">
                  <label for="phone">تلفن</label>
                  <input type="tel" class="form-control" id="phone" v-model="phone_number"
                         placeholder="logo">
                </div>
              </div>
              <div class="card-body border form-section">
                <div class="form-check">
                  <label for="website">آدرس وبسایت</label>
                  <input type="text" class="form-control" id="website" placeholder="balatar.net"
                         v-model="website">
                </div>
                <div class="form-check">
                  <label for="logo">لوگو</label>
                  <input type="file" accept="image/*" class="form-control" id="logo"
                         placeholder="logo" @change="onLogoSelected">
                </div>
                <div class="form-check">
                  <label for="location">شهر محل دفتر مرکزی:</label>
                  <input type="text" class="form-control" id="location"
                         placeholder="تهران, اصفهان,..." v-model="location">
                </div>
                <div class="form-check">
                  <label for="address">آدرس</label>
                  <input type="text" class="form-control" id="address"
                         placeholder="آدرس" v-model="address">
                </div>
              </div>
            </div>
            <div class="row" v-if="step===2">
              <div class="col-md-12 ">
                <div class="card-body row">
                  <div class="form-check col-md-6">
                    <label for="slogan">شعار استخدامی شما:</label>
                    <input type="text" class="form-control" id="slogan"
                           placeholder="به مجموعه ما بپیوندید" v-model="slogan">
                  </div>
                  <div class="form-check col-md-6">
                    <label for="mainPhoto">عکس اصلی سایت</label>
                    <input type="file" accept="image/*" class="form-control" id="mainPhoto"
                           placeholder="به مجموعه ما بپیوندید" @change="onMainPhotoSelected">
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <strong>پیام شما به کارجویان:</strong>
                  </div>
                  <div class="card-body">
                    <div class="form-check">
                      <label for="messageTitle">عنوان پیام:</label>
                      <input type="text" class="form-control" id="messageTitle"
                             placeholder="به مجموعه ما بپیوندید" v-model="message_title">
                    </div>
                    <div class="form-check">
                      <label for="messageContent">متن پیام:</label>
                      <textarea class="form-control" id="messageContent"
                                placeholder="به مجموعه ما بپیوندید"
                                v-model="message_content"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row " v-if="step===3">
              <div class="col-md-12 step3  ">
                <label for="whyUs">چرا باید با ما همکاری کنید؟</label>
                <textarea class="form-control" id="whyUs"
                          placeholder="محیط کاری شرکت ما..."
                          v-model="why_us"></textarea>
                <label for="aboutUs">درباره ما:</label>
                <textarea class="form-control" id="aboutUs"
                          placeholder="شرکت ما.."
                          v-model="about_us"></textarea>
                <label for="recruitingSteps">مراحل متداول استخدام در شرکت شما:</label>
                <textarea class="form-control" id="recruitingSteps"
                          placeholder="شرکت ما.."
                          v-model="recruiting_steps"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="  choose-company-pagination border " v-if="newCompany&&set">
          <button class="btn btn-success " @click.prevent="nextStep"> بعدی
          </button>
          <button class="btn btn-warning " @click.prevent="previous"> قبلی
          </button>
          <button type="submit" class="btn btn-primary "
                  @click.prevent="makeCompany">ساخت شرکت
          </button>
        </div>

        <div class="card card-body" v-if="set">
          <p>* کاربر عزیز لطفا اطلاعات این فرم را با دقت پر کرده و هیچ قسمتی را خالی نگذارید.</p>
          <p>* پس از ساخت این صفحه همکاران ما جهت تایید اطلاعات و مشاوره خرید با شما از طریق ایمیل تماس خواهند
            گرفت.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import BalatarHeader from '../BalatarHeader'

    export default {
        name: "chooseCompany",
        components: {BalatarHeader},
        data() {
            return {
                companyId: this.$store.state.companyId,
                name: this.$store.state.name,
                position: this.$store.state.position,
                email: this.$store.state.email,
                image: null,
                company_id: '',
                companyName: '',
                newCompany: '',
                set: '',
                step: 1,

                Name: '',
                company_size: '',
                slogan: '',
                website: '',
                logo: '',
                message_title: '',
                message_content: '',
                main_photo: '',
                about_us: '',
                why_us: '',
                recruiting_steps: '',
                address: '',
                Email: '',
                phone_number: '',
                location: '',
            }
        },
        methods: {
            onFileSelected() {
                this.image = event.target.files[0]
            },
            onMainPhotoSelected() {
                this.main_photo = event.target.files[0]
            },
            onLogoSelected() {
                this.logo = event.target.files[0]
            },
            joinCompany() {
                console.log(this.image);
                this.$store.dispatch('joinCompany', {
                    companyId: this.company_id,
                    position: this.position,
                    image: this.image
                }).then(response => {
                    this.$router.push('/user/choose-company')
                })
            },
            searchCompany() {
                this.$store.dispatch('searchCompany', {
                    companyId: this.company_id
                }).then(response => {
                    console.log(response);
                    this.companyName = response.data.data.name
                })
            },

            nextStep() {
                if (this.step < 3)
                    this.step = this.step + 1;
            },
            previous() {
                if (this.step > 1)
                    this.step = this.step - 1;
            },

            makeCompany() {
                console.log('check make company func', this.step)
                this.$store.dispatch('makeCompany', {
                    Name: this.Name,
                    company_size: this.company_size,
                    slogan: this.slogan,
                    website: this.website,
                    logo: this.logo,
                    message_title: this.message_title,
                    message_content: this.message_content,
                    main_photo: this.main_photo,
                    about_us: this.about_us,
                    why_us: this.why_us,
                    recruiting_steps: this.recruiting_steps,
                    address: this.address,
                    Email: this.Email,
                    phone_number: this.phone_number,
                    location: this.location,
                })
            }

        }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/user/chooseCompany.scss";


</style>
