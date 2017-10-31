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
        // verbinden mit itemList (itemId) wenn isAuction... ???!!?

        // this.recommendedRetailPrice = this.itemData.calculatedPrices.rrp.price;
        this.variationRetailPrice = this.itemData.calculatedPrices.default.price;
        // this.auctionCurrentPrice   = this.auction.currentPrice;
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
            // isAuction: function () {
            //     // return true if Auktion in property (Facets)
            //     if ( this.itemData.properties.length > 0 ) {
            //         for (var i = this.itemData.properties.length; --i >= 0;) {
            //             // todo: config prop-names
            //             if ( this.itemData.properties[i].property.names.name == "Auktion" ||
            //                 this.itemData.properties[i].property.names.name == "auction" ) {
            //                 // hier gibt es die itemId für die jeweilige Auktion !!!!?!
            //                 return true;
            //             }
            //         }
            //     }
            //     return false;
            // },
            auctionParams: function () {
                if ( this.auctionList.length > 0 ) {

                    for (var i = this.auctionList.length; --i >= 0;) {

                        if ( this.auctionList[i].itemId == this.itemData.item.id ) {

                            this.isAuction = true;

                            console.dir( auctionList[i] );

                            return this.auctionList[i];
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
