

const array_op = {
    remove_element: function(selected_list, name){
        for(let i=0; i<selected_list.length; i++){
            if(name === selected_list[i]){
                selected_list.splice(i, 1)
                break
                
            }
        }
    },
    get_random_element: function(selected_list){
        
        const index = Math.floor(Math.random() * selected_list.length)
        return selected_list[index]
    }
}

export {array_op}