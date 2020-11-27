(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0144":function(t,e,s){},2296:function(t,e,s){"use strict";var n=s("0144"),a=s.n(n);a.a},a726:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-center text-h5 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.qcst.title"))+"\n  ")]),s("p",{attrs:{id:"timer"}},[t._v(" "+t._s(t.minutes)+":"+t._s(t.seconds)+" ")]),s("div",{staticClass:"row justify-center q-mt-lg"},[t.isStarted?t._e():s("q-btn",{attrs:{color:"secondary",label:t.$t("common.start"),padding:"lg"},on:{click:t.startTest}}),t.isStarted?s("q-btn",{attrs:{color:"purple",label:t.$t("common.complete"),padding:"lg"},on:{click:t.completeTest}}):t._e()],1),t.isStarted?s("q-btn",{ref:"metronome_indicator",staticClass:"q-mt-xl",attrs:{padding:"xl",color:"black",round:"",flat:"",icon:"volume_up"}}):t._e(),s("audio",{ref:"sound_begin"},[s("source",{attrs:{src:"statics/sounds/begin.wav",type:"audio/wav"}})]),s("audio",{ref:"sound_minute1"},[s("source",{attrs:{src:"statics/sounds/1-minute.wav",type:"audio/wav"}})]),s("audio",{ref:"sound_minute2"},[s("source",{attrs:{src:"statics/sounds/2-minutes.wav",type:"audio/wav"}})]),s("audio",{ref:"sound_complete"},[s("source",{attrs:{src:"statics/sounds/time.wav",type:"audio/wav"}})]),s("audio",{ref:"sound_click"},[s("source",{attrs:{src:"statics/sounds/click.wav",type:"audio/wav"}})])],1)},a=[],o=s("967e"),r=s.n(o),i=(s("96cf"),s("fa84")),c=s.n(i),u=(s("c5f6"),s("efed")),d=s("9bf1"),p=s("7937"),l=180,m={name:"QCSTPage",props:{studyKey:String,taskId:Number},components:{},data:function(){return{isStarted:!1,isCompleted:!1,timer:null,countDown:l,startedTS:void 0,completionTS:void 0,steps:[],gender:"male",heartRate:"",cadence:625}},methods:{startTest:function(){var t=this;return c()(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStarted){e.next=14;break}return t.isStarted=!0,t.startedTS=new Date,e.next=5,u["a"].pedometer.isAvailable();case 5:if(!e.sent){e.next=9;break}u["a"].pedometer.startNotifications({},function(){var e=c()(r.a.mark((function e(s){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("Steps",s),t.steps.push(s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(t){console.error("Error getting steps",t)})),e.next=10;break;case 9:console.error("Pedometer not available");case 10:u["a"].media.playSound(t.$refs.sound_begin),t.timer=setInterval((function(){120===t.countDown?u["a"].media.playSound(t.$refs.sound_minute2):60===t.countDown&&u["a"].media.playSound(t.$refs.sound_minute1),t.countDown>=1?t.countDown--:(t.isStarted=!1,t.completeTest())}),1e3),u["a"].metronome.start(t.cadence,t.$refs.metronome_indicator.$el),t.$emit("updateTransition","slideInRight");case 14:case"end":return e.stop()}}),e)})))()},completeTest:function(){u["a"].media.playSound(this.$refs.sound_complete),u["a"].pedometer.stopNotifications(),this.completionTS=new Date;var t=this.studyKey,e=parseInt(this.taskId),s=d["a"].user._key,n={userKey:s,studyKey:t,taskId:e,createdTS:new Date,startedTS:this.startedTS,completionTS:this.completionTS,steps:this.steps,heartRate:void 0,borgScale:void 0};this.$router.push({name:"qcsthr",params:{report:n}})}},computed:{minutes:function(){return p["c"].pad(Math.floor(this.countDown/60),2)},seconds:function(){return p["c"].pad(this.countDown-60*this.minutes,2)}},beforeDestroy:function(){this.isStarted=!1,clearInterval(this.timer),u["a"].metronome.stop(),u["a"].pedometer.stopNotifications()}},f=m,w=(s("2296"),s("2877")),v=s("9989"),h=s("9c40"),S=s("eebe"),_=s.n(S),b=Object(w["a"])(f,n,a,!1,null,"55ec6cd8",null);e["default"]=b.exports;_()(b,"components",{QPage:v["a"],QBtn:h["a"]})}}]);