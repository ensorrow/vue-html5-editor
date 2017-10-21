import template from './dashboard.html'
import './style.css'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data(){
        return {
            // foreColor,backColor
            command: 'foreColor',
            colors: [
                '#474a4f', '#7e848c', '#3672b3', '#2e445c', '#e1274c', '#972245'
            ]
        }
    },
    methods: {
        changeColor(color){
            this.$parent.execCommand(this.command, color)
        }
    }
}
