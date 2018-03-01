'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TweetSchema = new Schema({
  author: String,
  text: String,
  url: String
});

module.exports = mongoose.model('Tweet', TweetSchema);


// {"statuses":
//   [{"created_at":"Thu Mar 01 07:19:31 +0000 2018",
//     "id":969109866081026049,"id_str":"969109866081026049",
//     "text":"The Great A'Tuin\n Istanbul, Constantinople\n That Nantucket man. #haiku",
//     "truncated":false,
//     "entities":
//       {"hashtags":[{"text":"haiku","indices":[64,70]}],
//        "symbols":[],
//        "user_mentions":[],
//        "urls":[]
//       },
//        "metadata":{"iso_language_code":"en","result_type":"recent"},
//        "source":"\u003ca href=\"http:\/\/woopty.com\" rel=\"nofollow\"\u003eQuizBotTom\u003c\/a\u003e",
//        "in_reply_to_status_id":null,
//        "in_reply_to_status_id_str":null,
//        "in_reply_to_user_id":null,
//        "in_reply_to_user_id_str":null,
//        "in_reply_to_screen_name":null,
//        "user":{"id":2579716200,
//                "id_str":"2579716200",
//                "name":"Limericku",
//                "screen_name":"QuizBotTom",
//                "location":"The internets",
//                "description":"I tweet haiku randomized from a spreadsheet.",
//                "url":null,
//                "entities":{"description":{"urls":[]}},
//                "protected":false,
//                "followers_count":75,
//                "friends_count":40,
//                "listed_count":43,
//                "created_at":"Sat Jun 21 03:30:53 +0000 2014",
//                "favourites_count":88,
//                "utc_offset":null,
//                "time_zone":null,
//                "geo_enabled":false,
//                "verified":false,
//                "statuses_count":20439,
//                "lang":"en",
//                "contributors_enabled":false,
//                "is_translator":false,
//                "is_translation_enabled":false,
//                "profile_background_color":"000000",
//                "profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
//                "profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
//                "profile_background_tile":false,
//                "profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/498530627776303105\/2yQLeZFb_normal.jpeg",
//                "profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/498530627776303105\/2yQLeZFb_normal.jpeg",
//                "profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/2579716200\/1437939023",
//                "profile_link_color":"ABB8C2","profile_sidebar_border_color":"000000",
//                "profile_sidebar_fill_color":"000000",
//                "profile_text_color":"000000",
//                "profile_use_background_image":false,
//                "has_extended_profile":false,
//                "default_profile":false,
//                "default_profile_image":false,
//                "following":false,
//                "follow_request_sent":false,
//                "notifications":false,
//                "translator_type":"none"
//         },
//        "geo":null,
//        "coordinates":null,
//        "place":null,
//        "contributors":null,
//        "is_quote_status":false,
//        "retweet_count":0,
//        "favorite_count":0,
//        "favorited":false,
//        "retweeted":false,
//        "lang":"en"
//       }
//   ],
//   "search_metadata":{
//     "completed_in":0.063,
//     "max_id":969109866081026049,
//     "max_id_str":"969109866081026049",
//     "next_results":"?max_id=969109866081026048&q=%23haiku&count=1&include_entities=1",
//     "query":"%23haiku",
//     "refresh_url":"?since_id=969109866081026049&q=%23haiku&include_entities=1",
//     "count":1,
//     "since_id":0,
//     "since_id_str":"0"
//   }
// }
