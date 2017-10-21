import template from './dashboard.html'
import Command from '../../range/command'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data(){
        return {
            
        }
    },
    methods: {
        setFontSize(size){
            this.$parent.execCommand('fontSize', size)
        },
        setContent(){
            this.$parent.execCommand('formatBlock', 'p')
        },
        setHeading(){
            this.$parent.execCommand('formatBlock', 'h1')
        },
        setLineHeight(lh){
            this.$parent.execCommand(Command.LINE_HEIGHT, lh)
        }
    }
}
