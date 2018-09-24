<template>
    <div class="container " id="template"  >
        <balatarHeader/>

        <div class="row main_photo" id="main"  >
            <div class=" card main_card col-5 " id="main-card">
                <img class="card-img-top" src="../assets/wings-logo.png" style="margin-top: 10px"></img>
                <div class="card-body" style="text-align: center">
                    <h4 style="color: #173c77"> سایت استخدامی اختصاصی خود را داشته باشید.</h4><br/>
                    <p>بالاتر برای شرکت شما یک سایت استخدامی اختصاصی می سازد. در این سایت شما می توانید شرکت خود را به
                        لحاظ ارزش ها و محیط کاری بطور کامل معرفی کنید.</p>
                    <p>همچنین می توانید تمامی موقعیت های شغلی خود را در این سایت قرار داده و به وسیله ابزارهای مدیریت
                        رزومه که ما در اختیار شما قرار می دهیم فرمان استخدام شرکت خودتان را به دست داشته باشید. </p>
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

<style scoped>
    .container {
        font-family: "B Nazanin";
        direction: rtl;
    }

    .main_photo {
        background: url("https://ja-company.demo.joomlart.com/images/joomlart/slideshow/item-3.jpg") no-repeat top fixed;
        min-height: 500px;
        background-size: 100% 100%, cover;
    }

    #main {
        height: 100%;
    }

    #template .main_card {
        margin: 10% auto;
        opacity: .93;
        border-radius: 20px;
    }

    #template p {
        text-align: center;
        font-size: medium;
    }
</style>