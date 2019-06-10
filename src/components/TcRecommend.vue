<template>
    <ul class="list">
        <li>
            <a href="/special/view/4.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'0',id:'4',name:'最新贷款口子'}" title="最新贷款口子">
                <img data-original="https://img.taoqian123.com/subject/20180621/15295455835b2b036fa1118.jpg"
                     alt="最新贷款口子" src="https://img.taoqian123.com/subject/20180621/15295455835b2b036fa1118.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/29.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'1',id:'29',name:'2018热门贷款大放送'}" title="2018热门贷款大放送">
                <img data-original="https://img.taoqian123.com/subject/20180306/15203045335a9e01952128d.jpg"
                     alt="2018热门贷款大放送" src="https://img.taoqian123.com/subject/20180306/15203045335a9e01952128d.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/47.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'2',id:'47',name:'不查征信就是爽'}" title="不查征信就是爽">
                <img data-original="https://img.taoqian123.com/subject/20180507/15256789115af0033f2cc4b.jpg"
                     alt="不查征信就是爽" src="https://img.taoqian123.com/subject/20180507/15256789115af0033f2cc4b.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/3.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'3',id:'3',name:'新手必备神器'}" title="新手必备神器">
                <img data-original="https://img.taoqian123.com/subject/20180621/15295456065b2b038657ad6.jpg"
                     alt="新手必备神器" src="https://img.taoqian123.com/subject/20180621/15295456065b2b038657ad6.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/6.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'4',id:'6',name:'通过率高达80%'}" title="通过率高达80%">
                <img data-original="https://img.taoqian123.com/subject/20171108/15101284585a02bb4a735ff.jpg"
                     alt="通过率高达80%" src="https://img.taoqian123.com/subject/20171108/15101284585a02bb4a735ff.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/9.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'5',id:'9',name:'有芝麻分就能贷'}" title="有芝麻分就能贷">
                <img data-original="https://img.taoqian123.com/subject/20180306/15203046115a9e01e3ea5ef.jpg"
                     alt="有芝麻分就能贷" src="https://img.taoqian123.com/subject/20180306/15203046115a9e01e3ea5ef.jpg"
                     style="display: inline;">
            </a>
        </li>
        <li>
            <a href="/special/view/10.html" onclick="clickEvent(this,'点击_专题')"
               data-count-json="{indexPath:'6',id:'10',name:'手机号+身份证就能贷'}" title="手机号+身份证就能贷">
                <img data-original="https://img.taoqian123.com/subject/20180306/15203042365a9e006ceab5a.jpg"
                     alt="手机号+身份证就能贷" src="https://img.taoqian123.com/subject/20180306/15203042365a9e006ceab5a.jpg"
                     style="display: inline;">
            </a>
        </li>
        <!--<li class="no-more"><span>没有更多了哦~</span></li>-->
    </ul>
</template>

<script>
    export default {
        name: "TcRecommend"
    }
</script>

<style lang="scss" scoped>
    ul {
        /*display: table;*/
        padding: 0 10px;
        overflow-x: auto;
        li {
            padding-right: 15px;
            display: table-cell;
            a {
                display: block;
                border-radius: 3px;
                /*background: url(../../images/v5_1_1/project_picture_default.png) center center no-repeat;*/
                background-size: 100%;
                color: #fff;
                text-align: center;
                overflow: hidden;
                img {
                    width: 140px;
                    height: 90px;
                    min-width: 140px;
                    min-height: 90px;
                    vertical-align: top;
                }
            }
        }
    }
</style>