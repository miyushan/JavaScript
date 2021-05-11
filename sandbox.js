let user = {
    name: 'miyushan',
    age: 30,
    email: 'smiushan2015@gmail.com',
    blogs: ['Nirosha','Arun','Aakila'],
    login: function(){
        console.log('user loged in');
    },
    logout: () => {
        console.log('user loged out');
    },
    logBlogs (){
         console.log('this user wrote these things');
         this.blogs.forEach( blog =>{
             console.log(blog);
         })
    }
};

// user.login();
// user.logout();

user.logBlogs();
