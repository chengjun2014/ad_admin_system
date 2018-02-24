export default {
    init(){
        console.log('module');
        this.test();
    },
    test(){
         alert($('.main').html());
        $(function(){
            alert($('.main').html());
        })
    }
};