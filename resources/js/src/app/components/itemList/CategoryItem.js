var ApiService          = require( "services/ApiService" );
var ResourceService     = require( "services/ResourceService" );
var NotificationService = require( "services/NotificationService" );

Vue.component( "category-item", {

    template: "#vue-category-item",

    props: [
        "auctionList",
        "decimalCount",
        "imageUrlAccessor",
        "itemData"
    ],

    data: function () {
        return {
            // recommendedRetailPrice: 0,
            variationRetailPrice: 0,
            isAuction: false
        };
    },

    created: function () {
        this.variationRetailPrice = this.itemData.calculatedPrices.default.price;
    },

    computed: {
            /**
             * returns itemData.item.storeSpecial
             */
            storeSpecial: function () {
                return this.itemData.item.storeSpecial;
            },

            texts: function () {
                return this.itemData.texts;
            },

            auctionParams: function () {

                var auctionParameter = [];


                if ( this.auctionList.length > 0 ) {
                    console.dir( this.auctionList );

                    for (var i = this.auctionList.length; --i >= 0;) {

                        if ( this.auctionList[i].itemId == this.itemData.item.id ) {

                            this.isAuction = true;

                            auctionParameter = this.auctionList[i];

                            this.auctionList = [];

                            return auctionParameter;
                        }
                    }
                }
                // else if ( this.itemData ) {
                //
                //     // ApiService.get(url, itemIds) -- getAuctionParamsListForCategoryItem (itemIds)  - AuctionService
                //     ApiService.post( "/api/auction-param-list", { 'itemIds': [this.itemData.item.id] } )
                //         .done( auctionList => {
                //
                //             if ( auctionList != null && Array.isArray(auctionList) ) {
                //
                //
                //                 auctionParameter = this.auctionList[0];
                //                 this.isAuction = true;
                //
                //
                //                 NotificationService.info( "Test: YES  enthalten... :)" ).closeAfter(3000);
                //                 return auctionParameter;
                //
                //             }
                //         } )
                //         .fail( () => {
                //                    NotificationService.error( "Error while searching CI" ).close;
                //                    alert( 'CategoryItem  ??!!' );
                //                }
                //         )
                //
                // }
                else {
                    this.isAuction = false;
                }
                return false;
            }
        }
} );
