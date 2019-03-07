const initialState = {

    pic1: 0,
    pic2: 0,
    whichSelector: "",

};

const reducer = (state = initialState, action) => {
    const newState = {...state};

if(action.type === 'MYMETHOD1'){
    newState.pic1 = action.value;
}

if(action.type === 'MYMETHOD2'){
    newState.pic2 = action.value;
}

//console.log(`${newState.pic1}--${newState.pic2}`)

    return newState;
};

export default reducer;