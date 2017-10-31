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
            isAuction: false
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

                    var auctionParameter = [];

                    for (var i = this.auctionList.length; --i >= 0;) {

                        if ( this.auctionList[i].itemId == this.itemData.item.id ) {

                            this.isAuction = true;

                            auctionParameter = this.auctionList[i];

                            this.auctionList = [];

                            return auctionParameter;
                        }
                    }
                }
                else {
                    this.isAuction = false;
                }
                return false;
            }
        }
} );
