import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentAccount:{
        id:1,
        username:'batuhankanra',
        avatar:'https://pbs.twimg.com/profile_images/1536316410854576135/Fo5iEchH_200x200.jpg'
    },
    accounts:[]

}


const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        // stateleri manipüle etme
        _addAccount:(state,action)=>{
            state.accounts.push(action.payload)
        },
        _removeAccount:(state,action)=>{
            state.accounts = state.accounts.filter(account=>account.id !==action.payload)
            if(state.currentAccount && action.payload===state.currentAccount.account){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount:(state,action)=>{
            state.currentAccount=action.payload
        }
    }
})
export const {_addAccount,_removeAccount,_setCurrentAccount}=auth.actions
export default auth.reducer
