function showList(objs){
    let htmlStr="";
    for(let i in objs){
        htmlStr+=`<div class="gl-item">
                    <a href="#" class="gl-item-link">
                        <img class="item-pic lazy j-modProduct" src="${objs[i].goodsImg}" alt="">
                        <h3 class="item-title">${objs[i].goodsName}</h3>
                        <p class="item-desc">${objs[i].goodsDesc}</p>
                        <p class="item-price">
                            <em>￥</em><span class="vm-price">${objs[i].goodsPrice}</span>
                        </p>
                        <p class="item-hot-sale red">热卖</p>
                    </a>
                </div>`;
    }

    $("#goodsListWrap").html(htmlStr);
}    

$(function(){
    $.get("getGoodsList.php",showList,"json");    
})




