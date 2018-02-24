export default {
    init(){
        console.log('module');
        this.test();
    },
    test(){
        
        $(function(){
            alert('获取dom');
            alert($('.main').html());
        })
        
    }
};