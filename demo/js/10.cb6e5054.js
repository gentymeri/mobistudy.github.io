(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8e47":function(M,N,j){"use strict";j.r(N);var z=function(){var M=this,N=M.$createElement,z=M._self._c||N;return z("q-page",{attrs:{padding:""}},[z("div",{staticClass:"text-center"},[z("img",{staticStyle:{width:"30vw","max-width":"150px"},attrs:{src:j("c38d")}}),z("br")]),z("div",{staticClass:"text-h5 text-center"},[M._v("\n    "+M._s(M.$t("studies.consent.accepted"))+" "+M._s(M.studyDescription.generalities.title[M.$i18n.locale])+"!\n  ")]),z("div",{staticClass:"q-my-md text-subtitle1 text-center"},[M._v("\n    "+M._s(M.$t("studies.consent.contactReminder"))+"\n  ")]),M._l(M.studyDescription.generalities.principalInvestigators,(function(N,j){return z("q-list",{key:j},[z("q-item",[z("q-item-section",[z("q-item-label",[M._v("\n          "+M._s(M.$t("studies.investigatorName"))+"\n        ")]),z("q-item-label",{attrs:{caption:""}},[M._v("\n          "+M._s(N.name)+"\n        ")])],1)],1),z("q-item",[z("q-item-section",[z("q-item-label",[M._v("\n          "+M._s(M.$t("studies.institution"))+"\n        ")]),z("q-item-label",{attrs:{caption:""}},[M._v("\n          "+M._s(N.institution)+"\n        ")])],1)],1),z("q-item",[z("q-item-section",[z("q-item-label",[M._v("\n          "+M._s(M.$t("studies.contact"))+"\n        ")]),z("q-item-label",{attrs:{caption:""}},[M._v("\n          "+M._s(N.contact)+"\n        ")])],1)],1),j!=M.studyDescription.generalities.principalInvestigators.length-1?z("q-separator",{staticClass:"q-mt-sm"}):M._e()],1)})),z("div",{staticClass:"q-my-md flex flex-center"},[z("q-btn",{staticClass:"full-width",attrs:{label:M.$t("common.next"),color:"primary"},on:{click:function(N){return M.next()}}})],1)],2)},D=[],T={name:"StudyDetailsPage",props:["studyDescription"],methods:{next(){this.$router.push({name:"tasker"})}}},L=T,I=j("2877"),y=j("9989"),t=j("1c1c"),g=j("66e5"),u=j("4074"),A=j("0170"),O=j("eb85"),x=j("9c40"),c=j("eebe"),E=j.n(c),i=Object(I["a"])(L,z,D,!1,null,null,null);N["default"]=i.exports;E()(i,"components",{QPage:y["a"],QList:t["a"],QItem:g["a"],QItemSection:u["a"],QItemLabel:A["a"],QSeparator:O["a"],QBtn:x["a"]})},c38d:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtNDE2LjY2Nzk2OSAwaC0zMjEuMzM1OTM4Yy01Mi41NjY0MDYgMC05NS4zMzIwMzEgNDIuNzY1NjI1LTk1LjMzMjAzMSA5NS4zMzIwMzF2MjY0LjUzMTI1YzAgNTIuNTY2NDA3IDQyLjc2NTYyNSA5NS4zMzIwMzEgOTUuMzMyMDMxIDk1LjMzMjAzMWg5Ny42NDg0MzhsNTIuNDE0MDYyIDUyLjQxMDE1N2MyLjkyNTc4MSAyLjkyOTY4NyA2Ljc2NTYyNSA0LjM5NDUzMSAxMC42MDU0NjkgNC4zOTQ1MzEgMy44MzU5MzggMCA3LjY3NTc4MS0xLjQ2NDg0NCAxMC42MDU0NjktNC4zOTQ1MzFsNTIuNDEwMTU2LTUyLjQxMDE1N2g5Ny42NDg0MzdjNTIuNTY2NDA3IDAgOTUuMzMyMDMyLTQyLjc2NTYyNCA5NS4zMzIwMzItOTUuMzMyMDMxdi0yNjQuNTMxMjVjLjAwMzkwNi01Mi41NjY0MDYtNDIuNzYxNzE5LTk1LjMzMjAzMS05NS4zMjgxMjUtOTUuMzMyMDMxem02NS4zMzIwMzEgMzU5Ljg2MzI4MWMwIDM2LjAyMzQzOC0yOS4zMDg1OTQgNjUuMzMyMDMxLTY1LjMzMjAzMSA2NS4zMzIwMzFoLTEwMy44NjMyODFjLTMuOTc2NTYzIDAtNy43OTI5NjkgMS41ODIwMzItMTAuNjA1NDY5IDQuMzk0NTMybC00Ni4xOTkyMTkgNDYuMTk1MzEyLTQ2LjE5OTIxOS00Ni4xOTUzMTJjLTIuODEyNS0yLjgxNjQwNi02LjYyNS00LjM5NDUzMi0xMC42MDU0NjktNC4zOTQ1MzJoLTEwMy44NjMyODFjLTM2LjAyMzQzNyAwLTY1LjMzMjAzMS0yOS4zMDg1OTMtNjUuMzMyMDMxLTY1LjMzMjAzMXYtMjY0LjUzMTI1YzAtMzYuMDIzNDM3IDI5LjMwODU5NC02NS4zMzIwMzEgNjUuMzMyMDMxLTY1LjMzMjAzMWgzMjEuMzM1OTM4YzM2LjAyMzQzNyAwIDY1LjMzMjAzMSAyOS4zMDg1OTQgNjUuMzMyMDMxIDY1LjMzMjAzMXptMCAwIiBmaWxsPSIjMDA2REYwIi8+PHBhdGggZD0ibTEzNy44NTkzNzUgMTM0Ljk0OTIxOWgtNTAuNTU4NTk0Yy0yLjA3MDMxMiAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djEwLjA3NDIxOWMwIDIuMDcwMzEyIDEuNjc5Njg4IDMuNzUgMy43NSAzLjc1aDE2LjAyMzQzOHY1MS4zNzg5MDZjMCAyLjA3NDIxOCAxLjY3OTY4NyAzLjc1IDMuNzUgMy43NWgxMS4wMTE3MTljMi4wNzAzMTIgMCAzLjc1LTEuNjc1NzgyIDMuNzUtMy43NXYtNTEuMzc4OTA2aDE2LjAyMzQzN2MyLjA3MDMxMyAwIDMuNzUtMS42Nzk2ODggMy43NS0zLjc1di0xMC4wNzQyMTljMC0yLjA3MDMxMy0xLjY3OTY4Ny0zLjc1LTMuNzUtMy43NXptMCAwIiBmaWxsPSIjMDA2REYwIi8+PHBhdGggZD0ibTE2MC44MDQ2ODggMjA3LjY1MjM0NGMyLjA3MDMxMiAwIDMuNzUtMS42NzU3ODIgMy43NS0zLjc1di0yMi45Mjk2ODhoMjQuODcxMDkzdjIyLjkyOTY4OGMwIDIuMDc0MjE4IDEuNjc5Njg4IDMuNzUgMy43NSAzLjc1aDExLjAwMzkwN2MyLjA3NDIxOCAwIDMuNzUtMS42NzU3ODIgMy43NS0zLjc1di02NS4yMDMxMjVjMC0yLjA3MDMxMy0xLjY3NTc4Mi0zLjc1LTMuNzUtMy43NWgtMTEuMDAzOTA3Yy0yLjA3MDMxMiAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djI0LjUxNTYyNWgtMjQuODcxMDkzdi0yNC41MTU2MjVjMC0yLjA3MDMxMy0xLjY3OTY4OC0zLjc1LTMuNzUtMy43NWgtMTEuMDAzOTA3Yy0yLjA3NDIxOSAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djY1LjIwMzEyNWMwIDIuMDc0MjE4IDEuNjc1NzgxIDMuNzUgMy43NSAzLjc1em0wIDAiIGZpbGw9IiMwMDZERjAiLz48cGF0aCBkPSJtMjU3LjE0NDUzMSAxMzcuMTg3NWMtLjU5NzY1Ni0xLjM1OTM3NS0xLjk0NTMxMi0yLjIzODI4MS0zLjQyOTY4Ny0yLjIzODI4MWgtMTEuNzUzOTA2Yy0xLjQ4NDM3NiAwLTIuODMyMDMyLjg3ODkwNi0zLjQzMzU5NCAyLjIzODI4MWwtMjguNzMwNDY5IDY1LjIwNzAzMWMtLjUxMTcxOSAxLjE1NjI1LS40MDIzNDQgMi40OTYwOTQuMjkyOTY5IDMuNTU4NTk0LjY4NzUgMS4wNjI1IDEuODcxMDk0IDEuNzAzMTI1IDMuMTQwNjI1IDEuNzAzMTI1aDExLjc1MzkwNmMxLjQ4NDM3NSAwIDIuODMyMDMxLS44Nzg5MDYgMy40Mjk2ODctMi4yNDIxODhsNS41NDY4NzYtMTIuNTg5ODQzaDI3Ljc1MzkwNmw1LjU0Njg3NSAxMi41ODk4NDNjLjU5NzY1NiAxLjM2MzI4MiAxLjk0NTMxMiAyLjI0MjE4OCAzLjQyOTY4NyAyLjI0MjE4OGgxMS43NTM5MDYuMDIzNDM4YzIuMDcwMzEyIDAgMy43NS0xLjY3OTY4OCAzLjc1LTMuNzUgMC0uNjc1NzgxLS4xNzk2ODgtMS4zMDQ2ODgtLjQ4ODI4MS0xLjg1MTU2MnptLTMuMjEwOTM3IDM3Ljk2NDg0NGgtMTIuMTkxNDA2bDYuMDk3NjU2LTEzLjgyMDMxM3ptMCAwIiBmaWxsPSIjMDA2REYwIi8+PHBhdGggZD0ibTM1MS4zODI4MTIgMTM0Ljk0OTIxOWgtMTEuMDExNzE4Yy0yLjA3MDMxMyAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djM3Ljc2NTYyNWwtMzEuMTYwMTU2LTQwLjA2NjQwNmMtLjcwNzAzMi0uOTE0MDYzLTEuODAwNzgyLTEuNDQ5MjE5LTIuOTU3MDMyLTEuNDQ5MjE5aC0xMS4wMTE3MThjLTIuMDcwMzEzIDAtMy43NSAxLjY3OTY4Ny0zLjc1IDMuNzV2NjUuMjA3MDMxYzAgMi4wNzAzMTIgMS42Nzk2ODcgMy43NSAzLjc1IDMuNzVoMTEuMDExNzE4YzIuMDcwMzEzIDAgMy43NS0xLjY3OTY4OCAzLjc1LTMuNzV2LTM2LjYzMjgxMmwzMC4yMjI2NTYgMzguOTI5Njg3Yy43MTA5MzguOTE3OTY5IDEuODA0Njg4IDEuNDUzMTI1IDIuOTYwOTM4IDEuNDUzMTI1aDExLjk0MTQwNmMyLjA3MDMxMyAwIDMuNzUtMS42Nzk2ODggMy43NS0zLjc1di02NS4yMDcwMzFjLjAwMzkwNi0yLjA3MDMxMy0xLjY3NTc4MS0zLjc1LTMuNzQ2MDk0LTMuNzV6bTAgMCIgZmlsbD0iIzAwNkRGMCIvPjxwYXRoIGQ9Im00MDIuOTQ5MjE5IDE2Ny41MjM0MzggMjQuMTQwNjI1LTI2LjI4OTA2M2MxLjAwNzgxMi0xLjA5Mzc1IDEuMjY5NTMxLTIuNjgzNTk0LjY3MTg3NS00LjA0Mjk2OS0uNjAxNTYzLTEuMzYzMjgxLTEuOTQ1MzEzLTIuMjQyMTg3LTMuNDMzNTk0LTIuMjQyMTg3aC0xMy45OTIxODdjLTEuMDM5MDYzIDAtMi4wMjczNDQuNDI5Njg3LTIuNzM0Mzc2IDEuMTgzNTkzbC0yMy4zNjcxODcgMjQuODk4NDM4di0yMi4zMzIwMzFjMC0yLjA3MDMxMy0xLjY3OTY4Ny0zLjc1LTMuNzUtMy43NWgtMTEuMDA3ODEzYy0yLjA3MDMxMiAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djY1LjIwMzEyNWMwIDIuMDc0MjE4IDEuNjc5Njg4IDMuNzUgMy43NSAzLjc1aDExLjAwNzgxM2MyLjA3MDMxMyAwIDMuNzUtMS42NzU3ODIgMy43NS0zLjc1di0xNi44MDg1OTRsNS40NzY1NjMtNS45MDYyNSAxOC45NDE0MDYgMjQuOTg0Mzc1Yy43MTA5MzcuOTMzNTk0IDEuODE2NDA2IDEuNDgwNDY5IDIuOTg4MjgxIDEuNDgwNDY5aDEzLjA1ODU5NGMxLjQxMDE1NiAwIDIuNzAzMTI1LS43ODkwNjMgMy4zNDM3NS0yLjA0Mjk2OS42NDA2MjUtMS4yNTc4MTMuNTIzNDM3LTIuNzY1NjI1LS4zMDQ2ODgtMy45MDYyNXptMCAwIiBmaWxsPSIjMDA2REYwIi8+PHBhdGggZD0ibTIxNC40NDkyMTkgMjQ4LjgwODU5NGMtLjY2MDE1Ny0xLjE4NzUtMS45MTQwNjMtMS45MjE4NzUtMy4yNjk1MzEtMS45MjE4NzVoLTEyLjAzNTE1N2MtMS4zMTY0MDYgMC0yLjUzNTE1Ni42OTE0MDYtMy4yMTQ4NDMgMS44MjAzMTJsLTE0LjYwMTU2MyAyNC4zMTI1LTE0LjYwMTU2My0yNC4zMTI1Yy0uNjc5Njg3LTEuMTI4OTA2LTEuODk4NDM3LTEuODIwMzEyLTMuMjE0ODQzLTEuODIwMzEyaC0xMi4wMzUxNTdjLTEuMzU5Mzc0IDAtMi42MDkzNzQuNzM0Mzc1LTMuMjczNDM3IDEuOTIxODc1LS42NjQwNjMgMS4xODM1OTQtLjYzMjgxMyAyLjYzNjcxOC4wNzgxMjUgMy43OTI5NjhsMjMuNjk5MjE5IDM4LjU1NDY4OHYyNC42ODc1YzAgMi4wNzAzMTIgMS42Nzk2ODcgMy43NSAzLjc1IDMuNzVoMTEuMTk1MzEyYzIuMDcwMzEzIDAgMy43NS0xLjY3OTY4OCAzLjc1LTMuNzV2LTI0LjY4NzVsMjMuNjk1MzEzLTM4LjU1NDY4OGMuNzE0ODQ0LTEuMTYwMTU2Ljc0MjE4Ny0yLjYwOTM3NC4wNzgxMjUtMy43OTI5Njh6bTAgMCIgZmlsbD0iIzAwNkRGMCIvPjxwYXRoIGQ9Im0yNDcuNDY0ODQ0IDI0NS4zMDQ2ODhjLTEwLjY3MTg3NSAwLTE5Ljc3NzM0NCAzLjYwNTQ2OC0yNy4wNjI1IDEwLjcxODc1LTcuMzA4NTk0IDcuMTQwNjI0LTExLjAxNTYyNSAxNi4xNDA2MjQtMTEuMDE1NjI1IDI2Ljc1IDAgMTAuNjEzMjgxIDMuNzA3MDMxIDE5LjYxMzI4MSAxMS4wMTU2MjUgMjYuNzUgNy4yODkwNjIgNy4xMTcxODcgMTYuMzk0NTMxIDEwLjcyMjY1NiAyNy4wNjI1IDEwLjcyMjY1NiAxMC42Njc5NjggMCAxOS43Njk1MzEtMy42MDU0NjkgMjcuMDU4NTk0LTEwLjcyMjY1NiA3LjMxMjUtNy4xMzY3MTkgMTEuMDE5NTMxLTE2LjE0MDYyNiAxMS4wMTk1MzEtMjYuNzUgMC0xMC42MDkzNzYtMy43MDcwMzEtMTkuNjA5Mzc2LTExLjAxOTUzMS0yNi43NS03LjI4NTE1Ny03LjExMzI4Mi0xNi4zODY3MTktMTAuNzE4NzUtMjcuMDU4NTk0LTEwLjcxODc1em0wIDU3LjM2NzE4N2MtNS40NTcwMzIgMC05LjkyOTY4OC0xLjg4NjcxOS0xMy42NzU3ODItNS43NjE3MTktMy43NzczNDMtMy45MTAxNTYtNS42MTMyODEtOC41MzEyNS01LjYxMzI4MS0xNC4xMzY3MTggMC01LjYwMTU2MyAxLjgzNTkzOC0xMC4yMjY1NjMgNS42MTMyODEtMTQuMTM2NzE5IDMuNzQ2MDk0LTMuODc1IDguMjE4NzUtNS43NjE3MTkgMTMuNjc1NzgyLTUuNzYxNzE5IDUuNDU3MDMxIDAgOS45Mjk2ODcgMS44ODY3MTkgMTMuNjcxODc1IDUuNzU3ODEyIDMuNzgxMjUgMy45MTc5NjkgNS42MjEwOTMgOC41NDI5NjkgNS42MjEwOTMgMTQuMTQwNjI2IDAgNS42MDE1NjItMS44Mzk4NDMgMTAuMjI2NTYyLTUuNjIxMDkzIDE0LjEzNjcxOC0zLjc0MjE4OCAzLjg3NS04LjIxMDkzOCA1Ljc2MTcxOS0xMy42NzE4NzUgNS43NjE3MTl6bTAgMCIgZmlsbD0iIzAwNkRGMCIvPjxwYXRoIGQ9Im0zNTAuMDc0MjE5IDI0Ni44ODY3MTloLTExLjAwNzgxM2MtMi4wNzAzMTIgMC0zLjc1IDEuNjc5Njg3LTMuNzUgMy43NXYzNi4xMDE1NjJjMCA1LjAyMzQzOC0xLjIwMzEyNSA4Ljk3MjY1Ny0zLjU3NDIxOCAxMS43MzgyODEtMi4yNTc4MTMgMi42MzY3MTktNS4yOTI5NjkgMy45MTc5NjktOS4yODEyNSAzLjkxNzk2OS0zLjk4NDM3NiAwLTcuMDE5NTMyLTEuMjgxMjUtOS4yNzczNDQtMy45MTc5NjktMi4zNzEwOTQtMi43NjU2MjQtMy41NzQyMTktNi43MTQ4NDMtMy41NzQyMTktMTEuNzM4Mjgxdi0zNi4xMDE1NjJjMC0yLjA3MDMxMy0xLjY3OTY4Ny0zLjc1LTMuNzUtMy43NWgtMTEuMDA3ODEzYy0yLjA3NDIxOCAwLTMuNzUgMS42Nzk2ODctMy43NSAzLjc1djM2LjU2NjQwNmMwIDEwLjM5NDUzMSAyLjk4MDQ2OSAxOC41ODk4NDQgOC44NjMyODIgMjQuMzYzMjgxIDUuODU5Mzc1IDUuNzU3ODEzIDEzLjQyOTY4NyA4LjY3OTY4OCAyMi40OTYwOTQgOC42Nzk2ODggOS4wNjY0MDYgMCAxNi42MzY3MTgtMi45MjE4NzUgMjIuNS04LjY3OTY4OCA1Ljg4MjgxMi01Ljc3MzQzNyA4Ljg2MzI4MS0xMy45Njg3NSA4Ljg2MzI4MS0yNC4zNjMyODF2LTM2LjU2NjQwNmMwLTIuMDcwMzEzLTEuNjc5Njg4LTMuNzUtMy43NS0zLjc1em0wIDAiIGZpbGw9IiMwMDZERjAiLz48L3N2Zz4K"}}]);