
const note_list = [
    ['E', 'B', 'G', 'D', 'A', 'E'],
    ['F', 'C', '', '', '', 'F'],
    ['', '', 'A', 'E', 'B', ''],
    ['G', 'D', '', 'F', 'C', 'G'],
    ['', '', 'B', '', '', ''],
    ['A', 'E', 'C', 'G', 'D', 'A'],
    ['', 'F', '', '', '', ''],
    ['B', '', 'D', 'A', 'E', 'B'],
    ['C', 'G', '', '', 'F', 'C'],
    ['', '', 'E', 'B', '', ''],
    ['D', 'A', 'F', 'C', 'G', 'D'],
    ['', '', '', '', '', ''],

]
class GuitarPanelModel{
    constructor(){
        this.row_num = 12
        this.column_num = 6
        this.panel_data = this.panel_data_init()
        this.last_key = undefined
        
    }

    panel_data_init(){
        /* the format is like this panel_data = [ [{is_show: false}, {is_show: false}]
        , [{is_show: false}, {is_show: false}], [{is_show: false}, {is_show: false}] ]*/
        const panel_data_first_line = []
        const panel_data_other = []
        const panel_data = []



        for(let row=0; row<this.row_num; row++){
            const row_data = []
            const column_note = note_list[row]

            for(let col=0; col<this.column_num; col++){
                const col_data = {
                    is_show: false,
                    note: column_note[col],
                    show_note: false,
                }
                row_data.push(col_data)
            }
            if(row ===0){
                panel_data_first_line.push(row_data)

            }
            else{
                panel_data_other.push(row_data)
            }
            panel_data.push(row_data)

        }
        // console.log("panel data", panel_data)
        return {panel_data, panel_data_first_line, panel_data_other}
    }


    get_panel_data(){
       return this.panel_data
    }

   
    get_col_data(){
        
        // return Array(this.column_num)
        // return Object.values({"0": false, "1": false, "2": false})
        return {"0": false, "1": false, "2": false}
        // return Array.apply(0, Array(this.column_num))
    }

    get_row_data(){
        return Array(this.row_num)
    }

    set_last_key(col_data){
        if(this.last_key !== undefined){
            this.last_key.is_show = false
        }
        this.last_key = col_data

    }

    get_random_key(){
        this.set_last_key()
        const row_index = Math.floor(Math.random() * this.row_num)
        const col = this.panel_data.panel_data[row_index]
        const col_index = Math.floor(Math.random() * this.column_num)
        const col_data = col[col_index]
        this.set_last_key(col_data)
        // console.log(col_data)
        col_data.is_show = true
        // console.log(row_index)
    }

    show_scale(is_show){
        for(let row of this.panel_data.panel_data){
            for(let col of row){
                // console.log(col.note)
                col.is_show = is_show
                col.show_note = is_show
                // console.log(col)

            }
        }
    }

   

}

export {GuitarPanelModel}