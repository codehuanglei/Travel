<template>
    <div class='header'>
        <div class='header-search'>
            <div class='header-input'>
            <i class='iconfont search-icon'>&#xe629;</i>
            <div class='header-searchhint'>
                <span>搜索景点门票</span>
            </div>
            </div>
        </div>
        <div class='header-right'>
        <i class='iconfont download-icon'>&#xe673;</i>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="stylus" scoped>
    .header
        min-width :320px !important
        height :.36rem
        margin:.15rem .16rem 0
        padding-bottom :.1rem
        display :flex
        .header-search
            height: .36rem;
            width: 2.91rem;
            border-radius: 3px;
            border: 0 none;
            box-sizing: border-box;
            background-color: #eee;
            .header-input
                width: calc(100% - 50px);
                background-color: #eee;
                margin: 0 10px 0 0;
                height: 100%;
                border: 0 none;
                line-height: 30px;
                font-size: 20px;
                display: flex;
                .search-icon
                    line-height :.36rem
                    color:#a5a5a5
                    margin-left :.06rem
                    font-size :.20rem
                .header-searchhint
                    font-size: .15rem;
                    margin-left: .06rem;
                    color: #a5a5a5;
                    line-height: .36rem;
                    display: inline-block;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
        .header-right
            display: initial;
            width: 47px;
            height: 38px;
            text-align: center;
            margin-left: 16px;
            .download-icon
                line-height :.36rem
                font-size:.24rem
                color:#a5a5a5
</style>