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
            auctionCurrentPrice: 0
        };
    },

    created: function () {
        // verbinden mit itemList (itemId) wenn isAuction... ???!!?

        // this.recommendedRetailPrice = this.itemData.calculatedPrices.rrp.price;
        this.variationRetailPrice   = this.itemData.calculatedPrices.default.price;
        this.auctionCurrentPrice   = this.auction.currentPrice;
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
            isAuction: function () {
                // return true if Auktion in property (Facets)
                if ( this.itemData.properties.length > 0 ) {
                    for (var i = this.itemData.properties.length; --i >= 0;) {
                        // todo: config prop-names
                        if ( this.itemData.properties[i].property.names.name == "Auktion" ||
                            this.itemData.properties[i].property.names.name == "auction" ) {

                            return true;
                        }
                    }
                }
                return false;
            },
            // auctionList: function () {
            //     // verbinden mit itemList (itemId) wenn isAuction... ???!!?
            // }
        }
} );
