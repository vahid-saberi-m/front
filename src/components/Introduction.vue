<template>
    <div class="container main-div" id="template">
        <balatarHeader/>

        <div class="row main_photo" id="main">
            <div class=" card main_card col-5 " id="main-card">
                <img class="card-img-top" src="../assets/wings-logo.png" style="margin-top: 10px"/>
                <div class="card-body" style="text-align: center">
                    <h4 style="color: #173c77"> سایت استخدامی خود را داشته باشید.</h4><br/>
                    <p>بالاتر برای شرکت شما یک سایت استخدامی اختصاصی می سازد. در این سایت شما می توانید شرکت خود را به
                        لحاظ ارزش ها و محیط کاری بطور کامل معرفی کنید.</p>
                    <p>همچنین می توانید تمامی موقعیت های شغلی خود را در این سایت قرار داده و به وسیله ابزارهای مدیریت
                        رزومه که ما در اختیار شما قرار می دهیم فرمان استخدام شرکت خودتان را به دست داشته باشید. </p>
                </div>
            </div>
        </div>
        <div class=" plans ">
            <div class="plan card">
                <div class=" plan-name">
                    <h2>
                        برنزی
                    </h2>
                </div>
                <div class="card-body plan-disc">
                  <p>2 آگهی شغلی همزمان</p>
                  <p>دریافت روزانه حد اکثر 5 رزومه</p>
                  <p>قابلیت تعریف حداکثر 1 سوال برای هر آگهی شغلی</p>
                  <p>حد اکثر 14 روز نمایش هر آگهی</p>
                  <p>گزارش حداکثر 2 رویداد دخلی </p>
                  <p>بارگذاری حداکثر 5 عکس از محیط شرکت </p>
                </div>
            </div>

            <div class="plan card " id="recommended">
              <button >recommended</button>
              <div class=" plan-name ">
                    <h2>
                       طلایی
                    </h2>                </div>
                <div class="card-body plan-disc">
                  <p> بدون محدودیت در آگهی شغلی همزمان </p>
                  <p>بدون محدودیت در دریافت رزومه</p>
                  <p>بدون محدودیت در تعریف سوال برای هر آگهی شغلی</p>
                  <p>بدون محدودیت در تعیین زمان انقضاء آگهی</p>
                  <p>گزارش تمامی رویدادهای داخلی </p>
                  <p>بارگذاری نامحدود عکس از محیط شرکت </p>
                </div>
            </div>
            <div class="plan card">
                <div class=" plan-name">
                    <h2>
                        نقره ای
                    </h2>
                </div>
                <div class="card-body plan-disc">
                  <p>5 آگهی شغلی همزمان</p>
                  <p>دریافت روزانه حد اکثر 30 رزومه</p>
                  <p>قابلیت تعریف حداکثر 3 سوال برای هر آگهی شغلی</p>
                  <p>حد اکثر 30 روز نمایش هر آگهی</p>
                  <p>گزارش حداکثر 5 رویداد دخلی </p>
                  <p>بارگذاری حداکثر 50 عکس از محیط شرکت </p>
                </div>
            </div>
        </div>
        <div class="card" style="margin-top: 1%; width: 100%">
            <div class="card-header" style="text-align: right">
                <h5 style="color: #173c77 ">بسته های قابل عرضه برای شرکت شما:</h5>
            </div>
            <div class="card-body">
                <table class="table table-striped table-dark">
                    <thead>
                    <tr>
                        <th scope="col">نام بسته</th>
                        <th scope="col"> رزومه های قابل مشاهده در هر روز</th>
                        <th scope="col"> رزومه های قابل مشاهده در هر ماه</th>
                        <th scope="col"> رزومه های قابل مشاهده برای هر موقعیت شغلی</th>
                        <th scope="col">آگهی های استخدامی همزمان</th>
                        <th scope="col">حداکثر تعداد سوال قابل طرح برای هر آگهی</th>
                        <th scope="col">حداکثر عمر هر آگهی</th>
                        <th scope="col">زمان اعتبار</th>
                        <th scope="col">قیمت</th>
                    </tr>
                    </thead>
                    <tr v-for="thisPackage in packages">
                        <td>{{thisPackage.name}}</td>
                        <td>{{thisPackage.daily_cv_view}}عدد</td>
                        <td>{{thisPackage.monthly_cv_view}}عدد</td>
                        <td>{{thisPackage.per_job_post_cv_view}}عدد</td>
                        <td>{{thisPackage.active_job_post_limit}}عدد</td>
                        <td>{{thisPackage.question_per_job_post_limit}}عدد</td>
                        <td>{{thisPackage.package_lifetime}}روز</td>
                        <td>{{thisPackage.job_post_lifetime_limit}}روز</td>
                        <td>{{thisPackage.price}}تومان</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    import BalatarHeader from "./BalatarHeader";

    export default {
        components: {BalatarHeader},
        props: [
            'name',
            'daily_cv_view',
            'monthly_cv_view',
            'per_job_post_cv_view',
            'active_job_post_limit',
            'question_per_job_post_limit',
            'package_lifetime',
            'job_post_lifetime_limit',
            'price'
        ],

        name: 'introduction',
        data() {
            return {
                packages: [],
            }
        },

        mounted() {
            fetch('http://api.balatar.inpin.co/api/packages')
                .then(response => response.json())
                .then((data) => {
                    this.packages = data;
                })
        }
    }

</script>

<!--<style scoped>-->

<!--</style>-->
<style lang="scss" scoped>
    @import "../styles/introduction.scss";
</style>
<!--<link rel="stylesheet" href="../styles/introduction.scss">-->
