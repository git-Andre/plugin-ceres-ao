var ApiService          = require( "services/ApiService" );
var ResourceService     = require( "services/ResourceService" );
var NotificationService = require( "services/NotificationService" );

Vue.component( "category-item-auction-list", {

    template: "#vue-category-item-auction-list",

    props: [
        "auctionList",
        "decimalCount",
        "imageUrlAccessor",
        "itemData"
    ],

    data() {
        return {
            // recommendedRetailPrice: 0,
            // variationRetailPrice: 0,
            // isAuction: false
        };
    },

    created() {
        // this.variationRetailPrice = this.itemData.calculatedPrices.default.price;

    },
    ready() {

    },
    computed: {
        /**
         * returns itemData.item.storeSpecial
         */
        // storeSpecial: function () {
        //     return this.itemData.item.storeSpecial;
        // },

        texts: function () {
            return this.itemData.texts;
        },

        auctionParams: function () {

            return this.auctionList;

            // var auctionParameter = [];
            //
            // if ( this.auctionList.length > 0 ) {
            //
            //     for (var i = this.auctionList.length; --i >= 0;) {
            //
            //         if ( this.auctionList[i].itemId == this.itemData.item.id ) {
            //
            //             // this.isAuction = true;
            //
            //             auctionParameter = this.auctionList[i];
            //
            //             this.auctionList = [];
            //
            //             return auctionParameter;
            //         }
            //     }
            // }
            // else {
            //     // this.isAuction = false;
            // }
            // return false;
        }
    }
} );
