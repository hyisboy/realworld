export default function ({store,redirect}){
   if(!store.state.userInfo){
       redirect('/login')
   }
}