var ResourceService     = require( "services/ResourceService" );
var ItemListService     = require( "services/ItemListService" );
var ApiService          = require( "services/ApiService" );
var NotificationService = require( "services/NotificationService" );

Vue.component( "item-list", {

    props: [
        "categoryId",
        // "areOnlyAuctionsInList",
        "template"
    ],

    data: function () {
        return {
            itemList: {},
            auctionList: [],
            isLoading: false,
            // areOnlyAuctionsInList: false,
            filterListState: false
        };
    },

    created: function () {
        this.$options.template = this.template;

        ItemListService.setCategoryId( this.categoryId );
        this.auctionList = [];

        // this.areOnlyAuctionsInList = false;
    },

    ready: function () {
        ResourceService.bind( "itemList", this );
        ResourceService.bind( "isLoading", this );
        ResourceService.bind( "auctionList", this );

        if ( this.auctionList.length === 0 && this.itemList.documents != undefined ) {
            // compute Array of ItemIds von itemList
            var itemIds = [];
            if ( this.itemList.documents.length > 0 ) {
                for (var i = this.itemList.documents.length; --i >= 0;) {
                    itemIds.push( this.itemList.documents[i].data.item.id );
                }
            }
            // ApiService.get(url, itemIds) -- getAuctionParamsListForCategoryItem (itemIds)  - AuctionService
            ApiService.post( "/auctions/paramlist", { 'itemIds': itemIds } )
                .done( auctionList => {

                    if ( auctionList != null && Array.isArray( auctionList ) && auctionList.length > 0 ) {

                        ResourceService.getResource( "auctionList" ).set( auctionList );
                        this.auctionList = auctionList;

                        // NotificationService.info( "Auktionen gefunden..." ).closeAfter( 2000 );
                    }
                    else {
                        this.auctionList = [];
                        console.log( 'auf 0' );
                    }
                } )
                .fail( () => {
                           NotificationService.error( "Error while searching in /auctions/paramlist" ).close;
                       }
                )
        }
        else {
            console.log( 'test' );
        }
    },
    computed: {
        areOnlyAuctionsInList() {

            if ( !this.auctionList || this.itemList.documents == undefined ) {
                return false;
            }
            else {

                return this.itemList.documents.length === this.auctionList.length;
            }
            // var onlyAuction = false;
            // console.log( 'watch' );
            // if (  ) {
            //     console.log( 'beides da...' );
            //     this.areOnlyAuctionsInList = true;
            // }
            // // }
            // else {
            //     this.areOnlyAuctionsInList = false;
            // }
            // // return true;
        }
    }
} );
