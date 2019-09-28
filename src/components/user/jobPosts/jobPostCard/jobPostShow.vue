  <template>
    <div v-if="show">
      <v-expansion-panel
        popout
      >
        <v-expansion-panel-content
        >
          <jobPostEdit v-if="editMode" @editOff="editMode=false" :jobPost="jobPost"></jobPostEdit>
          <template v-if="!editMode" >
            <slot slot="header">
              <b>
                {{jobPost.title}} {{role}}
              </b>
              <v-spacer></v-spacer>
            </slot>
            <v-card>
              <v-card-title>
              </v-card-title>
              <v-card-text>
                <v-icon v-if="jobPostState==='isWaiting'||isAdmin" @click="editMode=!editMode">edit</v-icon>
                <v-card-text
                  name="input-7-1"
                  label="شرح موقعیت شغلی"
                  append-icon="edit"
                >
                  <v-card>
                    <v-card-title>
                      شرح شغل
                    </v-card-title>
                    <v-card-text>
                      {{jobPost.description}}
                    </v-card-text>

                  </v-card>

                  <v-card>
                    <v-card-title>
                      ویژگی های مورد نیاز
                    </v-card-title>
                    <v-card-text>
                      {{jobPost.requirements}}
                    </v-card-text>
                  </v-card>

                  <v-card>
                    <v-card-title>
                      حقوق و مزایای در نظر گرفته شده:
                    </v-card-title>
                    <v-card-text>
                      {{jobPost.benefits}}
                    </v-card-text>
                  </v-card>
                  <v-card>
                    <v-card-title>
                      محل کار:
                    </v-card-title>
                    <v-card-text>
                      {{jobPost.location}}
                    </v-card-text>
                  </v-card>
                  <div class="job-post-time">
                    <div>
                      <v-card-title>
                        تاریخ انتشار:
                      </v-card-title>
                      <v-card-text>
                        <v-date-picker v-model="jobPost.publish_date" locale="fa-ir" readonly show-current="false"
                                       color="blue"></v-date-picker>
                      </v-card-text>
                    </div>
                    <v-spacer></v-spacer>
                    <v-card>
                      <v-card-title>
                        تاریخ انقضا:
                      </v-card-title>
                      <v-card-text>
                        <v-date-picker v-model="jobPost.expiration_date" locale="fa-ir" readonly show-current="false"
                                       color="red"></v-date-picker>
                      </v-card-text>
                    </v-card>
                  </div>
                  <hr>
                  <v-container row wrap align-center>
                    <v-flex class="text-xs-center">
                      <v-btn color="green" dark v-if="(jobPostState==='isWaiting')|(isAdmin)" @click="approveJobPost(jobPost.id)">تایید</v-btn>
                      <v-btn color="red" dark @click="deleteJobPost(jobPost.id)">حذف</v-btn>
                    </v-flex>
                  </v-container>
                </v-card-text>
              </v-card-text>
            </v-card>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
 </template>

<script>
    import jobPostEdit from './jobPostEdit'

    export default {
        components: {jobPostEdit},
        data() {
            return {
                role: this.$store.state.role,
                isAdmin: true ,
                show: true,
                editMode: false,
                jobPostState:this.postState
            };
        },
        mounted() {
            this.isAdmin = this.$store.getters.isAdmin;
        },
        name: "jobPostShow",
        props: {jobPost:Object , postState:String},
        methods: {
            approveJobPost(id) {
                this.$store.dispatch('approveJobPost', id)
                    .then(response => {
                        this.show = false;
                    })
            },
            deleteJobPost(id) {
                this.$store.dispatch('deleteJobPost', id)
                    .then(response => {
                        this.show = false;
                        this.$emit('removeJobPost', id)
                    })
            }
        },

    }
</script>

<style lang="scss" scoped>
  @import "../../../../styles/user/jobPostCard/jobPostShow.scss";
</style>
