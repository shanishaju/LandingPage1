
class Landing{
    //property variables
    database={ //object datatype
        Sanu:{username:'Sanu',password:'pass'},
        Shani:{username:'Shani',password:'pass'},
        Sana:{username:'Sana',password:'pass'}   
    }
    //method to store data to local storage.
    savedData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))

        }
    }
    //to get data from local storage
    getData(){

           this.database = JSON.parse(localStorage.getItem("database"))
            // console.log(this.database);
    }
    //method to register user
    register(){
        let user = regUser.value
        let pswd = regPswd.value
        // console.log(user,pswd);
        if(user=="" || pswd==""){
            alert("please enter the form completely")
        }
        else{
            if(user in this.database){
                alert('user already exist')
            }
            else{
                this.database[user]={username:user,password:pswd}
                alert('User added Successfuly')
                this.savedData()
                // navigate to login  page
                window.location = "Login.html"
            }
        }
    }
    //method for login user
    Login(){
        let user1 = logUser.value
        let pswd1 = LogPswd.value
        console.log(user1,pswd1);

        this.getData()

        if(user1=="" || pswd1==""){
            alert("please fill the form completly")
        }
        else{
            if(user1 in this.database){
                if(this.database[user1].password == pswd1){
                    alert(" login successfully")
                    //storing user name in to storage
                    localStorage.setItem("user",user1)
                    //navigate to home
                    window.location = 'Home.html'
                }
                else{
                    alert("please check username or password")
                }
            }
            else{
                alert("account dosent exist")
            }
        } 
    }



}

//create object 
const obj= new Landing
obj.savedData()
obj.getData()
