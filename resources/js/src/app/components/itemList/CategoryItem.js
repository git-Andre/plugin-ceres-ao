Vue.component( "category-item", {

    template: "#vue-category-item",

    props: [
        "decimalCount",
        "itemData",
        "imageUrlAccessor",
        "isAuction"
    ],

    data: function () {
        return {
            recommendedRetailPrice: 0,
            variationRetailPrice: 0
        };
    },

    created: function () {
        this.recommendedRetailPrice = this.itemData.calculatedPrices.rrp.price;
        this.variationRetailPrice   = this.itemData.calculatedPrices.default.price;
    },

    computed:
        {
            /**
             * returns itemData.item.storeSpecial
             */
            storeSpecial: function () {
                return this.itemData.item.storeSpecial;
            },

            /**
             * returns itemData.texts[0]
             */
            texts: function () {
                return this.itemData.texts;
            },
            isAuction: () => {
                // return true if Auktion in property (Facets)
                for (var i = this.itemData.properties.length; --i >= 0;) {
                    // todo: config prop-names
                    if ( this.itemData.properties[i].names.name == "Auktion" || this.itemData.properties[i].nams.name == "auction" ) {
                        return true;
                    }
                }
                return false;
            }
        }
} );
