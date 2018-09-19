<template>
    <div class="container">
        <div>
            <div>
                <b>Exercise 1</b>
                <p>Create a Signup Form where you retrieve the following Information</p>
                
                <form v-if="!isFormSubmitted">  
                  <app-user-name>
                  <div class="form-ctrl">
                        <label>First Name :  </label>
                        <input v-model.lazy="user.firstName" />
                    </div>
                        
                    <div  class="form-ctrl">
                        <label>Last Name :  </label>
                        <input v-model="user.lastName" />
                    </div>
                  </app-user-name>
                  
                  <div class="form-ctrl">
                    <label>Mail :  </label>
                    <input v-model="user.email" type="email"/>
                  </div>
                  
                  <div class="form-ctrl">
                    <label> Password </label>
                    <input type="password" v-model="user.password" />
                  </div>

                  <div class="form-ctrl">
                    <label> Store data :  </label>
                    <input type="radio" value="yes" v-model="user.storeData" > Yes </input>
                    <input type="radio" value="no" v-model="user.storeData" > No </input>
                  </div>

                  <div>
                    <button type="submit" @click.prevent="submitForm">Submit</button>
                  </div>
                </form>

                <b>Exercise 2</b>
                <p>Only display the Form if it has NOT been submitted</p>
                <p>Display the Data Summary ONCE the Form HAS been submitted</p>

                <b >Exercise 3</b>
                <p>Edit the Example from above and create a custom "Full Name" Control</p>
                <p>which still holds the First Name and Last Name Input Field</p>
            </div>
        </div>
        <hr>
        <div class="row" v-show="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>First Name: {{user.firstName}}</p>
                        <p>Last Name: {{user.lastName}}</p>
                        <p> Full Name: {{user.fullName}}
                        <p>Mail: {{user.email}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{user.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserName from './components/fullName';
export default {
  data: function (){
    return {
      user: {
        firstName: '',
        lastName: '',
        fullName: '',
        email: 'abc@xyz.com',
        password: '',
        storeData: ''
      },
      isFormSubmitted: false
    }
  },
  methods: {
    submitForm: function(){
      this.user.fullName = this.user.firstName + ' ' + this.user.lastName;
      this.isFormSubmitted = !this.isFormSubmitted;
    }
  },
  components:{
    appUserName: UserName
  }
};
</script>

<style>
  .form-ctrl {
    margin-bottom: 10px;
  }
</style>
