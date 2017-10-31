Vue.component( "category-item", {

    template: "#vue-category-item",

    props: [
        "decimalCount",
        "itemData",
        "imageUrlAccessor",
        "auctionList"
    ],

    data: function () {
        return {
            // recommendedRetailPrice: 0,
            variationRetailPrice: 0,
            isAuction: true
        };
    },

    created: function () {
        this.variationRetailPrice = this.itemData.calculatedPrices.default.price;
    },

    computed:
        {
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

                if ( this.auctionList.length > 0 ) {

                    console.log( 'this.auctionList.length > 0' );
                    for (var i = this.auctionList.length; --i >= 0;) {

                        if ( this.auctionList[i].itemId == this.itemData.item.id ) {

                            this.isAuction = true;

                            return this.auctionList[i];
                        }
                    }
                }
                else {
                    this.isAuction = false;
                }
                console.log( 'return false' );
                return false;
            }
        }
} );
