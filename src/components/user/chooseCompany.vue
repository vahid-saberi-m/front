<template>
    <div class="container" style="text-align: right; direction: rtl">
        <BalatarHeader/>
        <div class="card bg-warning" v-if="companyId">
            <div class="card-body">{{name}} عزیز تقاضای افزوده شدن شما در انتظار تایید مسوول مربوطه می باشد.</div>
        </div>
        <div class="card " v-if="!companyId" style=" border-radius: 10px ">
            <div class="card" v-if="!set">
                <p>{{name}} عزیز. آیا می خواهید یک سایت استخدامی جدید بسازید یا اینکه دوست دارید به جمع کاربران سایت استخدامی شرکتی بپیوندید؟</p>
                <button class="btn btn-success" @click="set=1 ; newCompany=1">سایت استخدامی جدید</button>
                <button class="btn btn-success" @click="set=1 ; newCompany=0">پیوستن به سایت استخدامی</button>
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
                            <input type="" required class="input-group col-2" id="company_id" v-model="company_id"
                                   @input="searchCompany"/>
                            <span class="badge badge-info col-4"
                                  style="font-size: medium; margin-top: 10px; margin-right: 10px">{{companyName}}</span>
                        <br>
                        <label for="position">
                            <strong> رده سازمانی:</strong>
                        </label>
                        <input type="" required class="input-group col-2" id="position" v-model="position"/>
                        <label for="image"><strong> عکس:</strong></label>
                        <input type="file" class="form-control-file col-2" id="image" name="image" accept="image/*"
                               required @change="onFileSelected"/>
                        <button type="button" class="btn btn-primary" style="margin-top: 10px" @click="joinCompany">ثبت
                            اطلاعات
                        </button>
                    </div>
                </div>
            </form>


            <form v-if="newCompany&&set" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
                newCompany:'',
                set:''
            }
        },
        methods: {
            onFileSelected() {
                this.image = event.target.files[0]
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
            }

        }
    }
</script>

<style scoped>
    input {
        border-radius: 3px;
    }

    label {
        text-align: right;
    }
</style>