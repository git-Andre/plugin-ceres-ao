Vue.component( "auction-countdown-itemlists", {
    props: [
        "template",
        "now",
        "enddate"
    ],
    data() {
        return {
            // deadLine: 0
        };
    },
    created() {
        this.$options.template = this.template;
        this.enddate          = parseInt(this.enddate);
        this.now               = Math.trunc( (new Date()).getTime() / 1000 );

    },
    ready() {
            // this.deadLine = this.enddate;
    },
    methods: {
        // twoDigits(value) {
        //     if ( value.toString().length <= 1 ) {
        //         return "0" + value.toString();
        //     }
        //     return value.toString();
        // }
    },
    computed: {
        // seconds() {
        //     return this.twoDigits( (this.deadline - this.now) % 60 );
        // },
        // minutes() {
        //     return this.twoDigits( Math.trunc( (this.deadline - this.now) / 60 ) % 60 );
        // },
        hours() {
            return Math.trunc( (this.enddate - this.now) / 60 / 60 ) % 24 ;
            // return this.twoDigits( Math.trunc( (this.enddate - this.now) / 60 / 60 ) % 24 );
        },
        days() {
            return Math.trunc( (this.enddate - this.now) / 60 / 60 / 24 ) ;
            // return this.twoDigits( Math.trunc( (this.enddate - this.now) / 60 / 60 / 24 ) );
        },
        deadLine() {
            return this.enddate * 1000;
        }
    },
    watch: {
        // now(value) {
        //     if ( this.deadline > this.now ) {
        //         this.diff = this.deadline - this.now;
        //     }
        //     else {
        //         this.diff               = 0;
        //         this.$parent.auctionEnd = true;
        //         window.clearInterval( this.timer );
        //     }
        // }
    }
} )
;
