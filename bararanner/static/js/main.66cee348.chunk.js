(this["webpackJsonpbararan-hay-v2"] = this["webpackJsonpbararan-hay-v2"] || []).push([
	[0], {
		167: function (e) {
			e.exports = JSON.parse('[{"key":"baratian-dictionary","name":"\u0531\u0576\u0563\u056c\u0565\u0580\u0565\u0576-\u0570\u0561\u0575\u0565\u0580\u0565\u0576 \u0562\u0561\u057c\u0561\u0580\u0561\u0576 (\u0546.\u054c. \u0532\u0561\u0580\u0561\u0569\u0575\u0561\u0576)","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/en-hy%20%26%20hy-en/baratian-dictionary/baratyan-dictionary.tab"},{"key":"armdicto-dictionary","name":"\u0531\u0576\u0563\u056c\u0565\u0580\u0565\u0576-\u0570\u0561\u0575\u0565\u0580\u0565\u0576 \u0562\u0561\u057c\u0561\u0580\u0561\u0576 (Armdicto)","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/en-hy%20%26%20hy-en/freearmdicto/armdicto.tab"},{"key":"noch-en-hy","name":"\u0531\u0576\u0563\u056c\u0565\u0580\u0565\u0576-\u0570\u0561\u0575\u0565\u0580\u0565\u0576 \u057f\u0565\u056d\u0576\u056b\u056f\u0561\u056f\u0561\u0576 \u0562\u0561\u057c\u0561\u0580\u0561\u0576 (noch)","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/en-hy%20%26%20hy-en/noch-armenian-dictionary/noch_en-hy.tab"},{"key":"noch-hy-en","name":"\u0540\u0561\u0575\u0565\u0580\u0565\u0576-\u0561\u0576\u0563\u056c\u0565\u0580\u0565\u0576 \u057f\u0565\u056d\u0576\u056b\u056f\u0561\u056f\u0561\u0576 \u0562\u0561\u057c\u0561\u0580\u0561\u0576 (noch)","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/en-hy%20%26%20hy-en/noch-armenian-dictionary/noch_hy-en.babylon"},{"key":"hy-ru-dictionary","name":"\u0540\u0561\u0575\u0565\u0580\u0565\u0576-\u057c\u0578\u0582\u057d\u0565\u0580\u0565\u0576 \u0562\u0561\u057c\u0561\u0580\u0561\u0576 (\u0540. \u0531\u0573\u0561\u057c\u0575\u0561\u0576\u056b \u0531\u0576\u057e\u0561\u0576 \u053c\u0565\u0566\u057e\u056b \u053b\u0576\u057d\u057f\u056b\u057f\u0578\u0582\u057f)","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/en-ru%20%26%20ru-en/hy-ru-dictionary/ArmRus.txt"},{"key":"hy-la","name":"??????????????-?????????????????? ??????????????","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/la-hy%20%26%20hy-la/hy-la/hy-la.tab"},{"key":"la-hy","name":"??????????????????-?????????????? ??????????????","location":"https://raw.githubusercontent.com/iamrobertgrigoryan/DocRoBen/gh-pages/bararanner/bararanner/la-hy%20%26%20hy-la/la-hy/la-hy.tab"}]')
		},
		422: function (e, t, n) {},
		424: function (e, t, n) {
			"use strict";
			n.r(t);
			var a = n(0),
				r = n.n(a),
				c = n(24),
				i = n.n(c),
				o = (n(176), n(87)),
				s = n.n(o),
				d = (n(90), n(66)),
				l = n.n(d),
				h = (n(108), n(67)),
				b = n.n(h),
				u = (n(92), n(47)),
				y = n.n(u),
				j = (n(180), n(82)),
				m = n.n(j),
				f = (n(69), n(39)),
				g = n.n(f),
				O = (n(185), n(170)),
				x = n.n(O),
				p = (n(110), n(171)),
				A = n.n(p),
				k = n(48),
				v = (n(70), n(38)),
				D = n.n(v),
				w = n(432),
				B = (n(192), n(78)),
				S = n.n(B),
				E = n(25),
				K = n(51),
				P = n(166),
				H = n.n(P);

			function M(e, t) {
				switch (t.type) {
				case "load":
					return Object(E.a)(Object(E.a)({}, e), {}, {
						loading: !1
					}, t.payload);
				case "enable":
					return Object(E.a)(Object(E.a)({}, e), {}, {
						checkedKeys: Object(E.a)(Object(E.a)({}, e.checkedKeys), {}, Object(K.a)({}, t.payload.key, !0)),
						dictionaries: e.dictionaries.map((function (e) {
							return e.key === t.payload.key ? t.payload : e
						}))
					});
				case "disable":
					return Object(E.a)(Object(E.a)({}, e), {}, {
						checkedKeys: Object(E.a)(Object(E.a)({}, e.checkedKeys), {}, Object(K.a)({}, t.payload.key, !1)),
						dictionaries: e.dictionaries.map((function (e) {
							return e.key === t.payload.key ? t.payload : e
						}))
					});
				default:
					throw new Error("".concat(t.type, " not found!"))
				}
			}
			var R = n(167),
				I = n(27),
				q = n.n(I),
				C = n(7);
			q.a.config({
				name: "bararan-hay",
				description: "dictionaries",
				driver: [q.a.WEBSQL, q.a.INDEXEDDB]
			});
			var Z = "v2.0",
				T = function (e, t) {
					return q.a.getItem("checkedKeys").then((function (n) {
						var a = Object.assign({}, n, Object(K.a)({}, e, t));
						return q.a.setItem("checkedKeys", a)
					}))
				},
				z = Object(a.createContext)();

			function U(e) {
				var t = e.children,
					n = function () {
						var e = Object(a.useReducer)(M, {
								loading: !0,
								checkedKeys: {},
								dictionaries: R
							}),
							t = Object(k.a)(e, 2),
							n = t[0],
							r = t[1],
							c = function () {
								return q.a.ready().then((function () {
									return q.a.getItem("version").then((function (e) {
										return e === Z ? Promise.resolve() : q.a.clear().then((function () {
											return q.a.setItem("version", Z)
										}))
									}))
								})).then((function () {
									return q.a.getItem("checkedKeys")
								})).then((function (e) {
									var t = e || {};
									return Promise.all(n.dictionaries.map((function (e) {
										return t[e.key] ? q.a.getItem(e.key).then((function (t) {
											return Object(E.a)(Object(E.a)({}, e), {}, {
												data: t
											})
										})).catch((function () {
											return Promise.resolve(e)
										})) : e
									}))).then((function (e) {
										return r({
											type: "load",
											payload: {
												dictionaries: e,
												checkedKeys: t
											}
										})
									}))
								}))
							},
							i = function (e) {
								return H.a.get(e.location).then((function (t) {
									return q.a.setItem(e.key, t.data)
								})).then((function () {
									return q.a.getItem(e.key)
								})).catch((function (e) {
									return S.a.error(e.message), Promise.reject(e)
								}))
							};
						return {
							storage: n,
							load: c,
							enable: function (e) {
								return q.a.getItem(e.key).then((function (t) {
									return t || i(e)
								})).then((function (t) {
									return T(e.key, !0), r({
										type: "enable",
										payload: Object(E.a)(Object(E.a)({}, e), {}, {
											data: t
										})
									})
								}))
							},
							disable: function (e) {
								return T(e.key, !1), r({
									type: "disable",
									payload: Object(E.a)(Object(E.a)({}, e), {}, {
										data: ""
									})
								})
							}
						}
					}();
				return Object(C.jsx)(z.Provider, {
					value: n,
					children: t
				})
			}

			function Y() {
				return Object(a.useContext)(z)
			}
			var L = function (e, t, n) {
					var a = [];
					return e.dictionaries.forEach((function (r) {
						var c = String(t).trim().replace(/[*+?^${}()|[\]\\]/g, "\\$&").replace(/\u0587|\u0565\u0582/g, "(\u0587|\u0565\u0582)");
						if (e.checkedKeys[r.key] && c) {
							var i = function (e, t) {
									var n = e.lastIndexOf("."),
										a = e.substr(n + 1),
										r = {
											tab: "^".concat(t, ".+"),
											txt: "^".concat(t, ".+"),
											babylon: "^(?:.+\\|\\s*)?".concat(t, ".*\n.+\n")
										};
									return new RegExp(r[a], "mgi")
								}(r.location, c),
								o = r.data.match(i);
							if (o) {
								var s = Math.min(o.length, n);
								a.push({
									name: "".concat(r.name, " [").concat(s, "/").concat(o.length, "]"),
									key: r.key,
									lines: o.slice(0, n)
								})
							}
						}
					})), a
				},
				V = (n(265), n(107)),
				G = n.n(V),
				J = (n(267), n(169)),
				Q = n.n(J),
				W = n(429),
				F = D.a.Title,
				N = function (e) {
					var t = e.dictionary,
						n = Y(),
						r = n.storage,
						c = n.enable,
						i = n.disable,
						o = Object(a.useState)(!1),
						s = Object(k.a)(o, 2),
						d = s[0],
						l = s[1];
					return Object(C.jsx)(G.a, {
						spinning: d,
						children: Object(C.jsx)(Q.a, {
							onChange: function (e) {
								e.target.checked ? (l(!0), c(t).then((function (e) {
									return l(!1), e
								}))) : i(t)
							},
							checked: r.checkedKeys[t.key],
							style: {
								display: "flex",
								margin: "0 0 14px 0",
								alignItems: "flex-start"
							},
							children: Object(C.jsx)("span", {
								style: {
									top: -1,
									position: "relative"
								},
								children: t.name
							})
						})
					})
				};

			function X() {
				var e = Y(),
					t = e.storage,
					n = e.load,
					r = Object(a.useState)(!0),
					c = Object(k.a)(r, 2),
					i = c[0],
					o = c[1];
				return Object(a.useEffect)((function () {
					n().then((function () {
						o(!1)
					}))
				}), []), Object(C.jsx)(g.a, {
					style: {
						marginBottom: 12
					},
					bordered: !1,
					title: Object(C.jsxs)(F, {
						level: 5,
						strong: !0,
						style: {
							lineHeight: 1
						},
						children: [Object(C.jsx)(W.a, {
							style: {
								marginRight: 8
							}
						}), "???????????? ????????????????"]
					}),
					children: Object(C.jsx)(G.a, {
						spinning: i,
						children: t.dictionaries.map((function (e) {
							return Object(C.jsx)(N, {
								dictionary: e
							}, e.key)
						}))
					})
				})
			}
			var _ = n(430),
				$ = D.a.Title,
				ee = D.a.Link;

			function te() {
				return Object(C.jsx)(g.a, {
					style: {
						marginBottom: 12
					},
					bordered: !1,
					title: Object(C.jsxs)($, {
						level: 5,
						style: {
							lineHeight: 1
						},
						children: [Object(C.jsx)(_.a, {
							style: {
								marginRight: 8
							}
						}), "?????????????? ????????????????"]
					}),
					children: Object(C.jsxs)(b.a, {
						direction: "vertical",
						children: [Object(C.jsx)(ee, {
							target: "_blank",
							href: "https://hy.wikibooks.org/wiki/%D5%80%D5%A1%D5%B5%D5%A5%D6%80%D5%A5%D5%B6%D5%B8%D6%82%D5%B4_%D5%BF%D5%A1%D6%80%D5%A1%D5%AE%D5%BE%D5%A1%D5%AE_%D5%BD%D5%AD%D5%A1%D5%AC%D5%B6%D5%A5%D6%80",
							children: "???????????????????? ???????????????? ??????????????"
						}), Object(C.jsx)(ee, {
							target: "_blank",
							href: "https://hy.wikipedia.org/wiki/%D5%8E%D5%AB%D6%84%D5%AB%D5%BA%D5%A5%D5%A4%D5%AB%D5%A1:%D4%BC%D5%A5%D5%A6%D5%BE%D5%AB_%D5%AF%D5%B8%D5%B4%D5%AB%D5%BF%D5%A5%D5%AB_%D5%B0%D5%B8%D6%80%D5%A4%D5%B8%D6%80%D5%A1%D5%AF%D5%B6%D5%A5%D6%80",
							children: "?????????? ?????????????? ??????????????????????"
						}), Object(C.jsx)(ee, {
							target: "_blank",
							href: "http://translator.am/am/index.html",
							children: "??????????????????"
						})]
					})
				})
			}
			var ne = n(431),
				ae = D.a.Title,
				re = function (e) {
					return e.results.map((function (e) {
						return Object(C.jsxs)(g.a, {
							bordered: !1,
							style: {
								marginBottom: 5
							},
							children: [Object(C.jsxs)(ae, {
								level: 5,
								children: [Object(C.jsx)(ne.a, {
									style: {
										marginRight: 8
									}
								}), e.name]
							}), Object(C.jsx)("ul", {
								style: {
									padding: "10px 0 0 25px"
								},
								children: e.lines.map((function (e, t) {
									return Object(C.jsx)("li", {
										dangerouslySetInnerHTML: {
											__html: e.replace(/\\n/g, "\n")
										},
										style: {
											marginBottom: 10,
											whiteSpace: "pre-line",
											lineHeight: 1.7
										}
									}, t)
								}))
							})]
						}, e.key)
					}))
				},
				ce = D.a.Title;

			function ie() {
				var e = Y().storage,
					t = Object(a.useState)(""),
					n = Object(k.a)(t, 2),
					r = n[0],
					c = n[1],
					i = Object(a.useState)([]),
					o = Object(k.a)(i, 2),
					s = o[0],
					d = o[1],
					h = Object(a.useRef)(),
					b = new URLSearchParams(window.location.search),
					u = !!r.trim() && 0 === s.length,
					j = Object(a.useMemo)((function () {
						return !Object.values(e.checkedKeys).some(Boolean)
					}), [e.checkedKeys]);
				return Object(a.useEffect)((function () {
					d(L(e, r, 4))
				}), [r, e.checkedKeys]), Object(a.useEffect)((function () {
					c(b.get("word") || "")
				}), []), Object(a.useEffect)((function () {
					var e;
					null === (e = h.current) || void 0 === e || e.focus()
				}), [e.checkedKeys]), Object(C.jsx)("div", {
					children: Object(C.jsxs)(l.a, {
						gutter: 26,
						children: [Object(C.jsx)(y.a, {
							xs: 24,
							sm: 24,
							md: 24,
							lg: 8,
							xl: 6,
							children: Object(C.jsx)(X, {})
						}), Object(C.jsxs)(y.a, {
							xs: 24,
							sm: 24,
							md: 24,
							lg: 16,
							xl: 12,
							style: {
								marginBottom: 12
							},
							children: [Object(C.jsx)(x.a, {
								size: "large",
								style: {
									marginBottom: 15
								},
								children: Object(C.jsx)(A.a, {
									allowClear: !0,
									value: r,
									ref: h,
									disabled: j,
									style: {
										height: "50px",
										border: "none",
										padding: "10px 20px"
									},
									placeholder: j ? "\u0538\u0576\u057f\u0580\u0565\u0584 \u0562\u0561\u057c\u0561\u0580\u0561\u0576\u0568" : "\u0544\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0565\u0584 \u0562\u0561\u057c\u0568...",
									onChange: function (e) {
										var t = e.target.value;
										c(t), b.set("word", t), window.history.replaceState(null, null, "?".concat(b.toString()))
									}
								})
							}), !u && 0 === s.length && Object(C.jsxs)(g.a, {
								bordered: !1,
								children: [Object(C.jsxs)(ce, {
									level: 5,
									children: [Object(C.jsx)(w.a, {
										style: {
											marginRight: 8
										}
									}), "???????? ???????????????????? ??????"]
								}), "???????? ???? ???????????? ????????????????????", " ", Object(C.jsx)("a", {
									// href: "/",
									// target: "_blank",
									// children: "?????? ???????????????? ??????????????????????"
								}), " ", "?????? ???????? ?? ???????????? ???????????? ?????????????? ???? ???????????????????? ?????????????? ???????? ???????????????????? ????????????"]
							}), u && Object(C.jsx)(g.a, {
								bordered: !1,
								children: Object(C.jsx)(m.a, {
									style: {
										paddingTop: 55
									},
									image: m.a.PRESENTED_IMAGE_SIMPLE,
									description: "\u0538\u0576\u057f\u0580\u057e\u0561\u056e \u0562\u0561\u057c\u0561\u0580\u0561\u0576\u0576\u0565\u0580\u0578\u0582\u0574 \u0561\u0575\u057d \u0562\u0561\u057c\u0568 \u0579\u056f\u0561"
								})
							}), Object(C.jsx)(re, {
								results: s
							})]
						}), Object(C.jsx)(y.a, {
							xs: 24,
							sm: 24,
							md: 24,
							lg: 8,
							xl: 6,
							children: Object(C.jsx)(te, {})
						})]
					})
				})
			}
			var oe = n.p + "bararanner/static/media/logo.79d1f611.svg";

			function se() {
				return Object(C.jsx)("a", {
					target: "_blank",
					href: "https://docroben.netlify.app",
					children: Object(C.jsx)("img", {
						width: 127,
						src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAABACAYAAAA6VspUAAAK30lEQVR4nO2de5AU1RWHv51skSywwDJLgmFBSZANQoDw0Ky4pKSKSFArWDGYCISHpUAMqAUoJanKal4aMBGJQSopwPAwPJJgBZGEEowrIPKIEuS1S1RYgknYRVxkq8Ry8seh6Z5n98z07ZlZzlc1NT2zt8/9bdf8um/fe+7tosiIWzFMN6AK6AN8CegNdAU6AqWmK1eUPKYZOAu8BxwFDgOHgJ3ASZMVFxuKOxi4ExiNmF1RlHhKL74qgCExfzsMbAJWA3v9rrjIxyt+KTAVmAxc41dQRVE4CCwDliCthKzxw/idgPuAmUDnrBUpipKMJuApYCHwfjaBQlnsWwRMAuqAGtT0imKazojX6hDvFWUaKFPj9wJqkeZHeaaVK4qSEeWI92qBL2YSIBPjfxvpbBiWSYWKovjGMGAf4sm0SMf4RcACYC3QId2KFEUxQgfEkwtIo+nv1fhtgJXArPR1KYoSALMQj7bxUtiL8dsAzyPj8oqi5C93Il51Nb+b8YuApcAoH0QpimKeUYhnUzb73Yz/c2CcX4oURQmEccBjqQqkMv7twEO+ylEUJSgeJEVvfzLjfwH4nRE5iqIExW8RL8eRyPhFwLPI7DlFUQqXjoiX4+73Exl/InCDaUWKogTCDUh6bxSxxu8E/CIINYqiBMbjiLcvETsf/z6gS2ByAGbPhK/FZP9GIjBpOjSdcd+/U0fZf/BA6NFdPn8qBB+eh3+/BwcOQu1OqDtmRr+i5D9dEG8/Yn3hNH57ZGptsJR1hLYl8d+HXEYaQyGYPB5uuwVKPhP/97ZtoUs5DOgH48bC9l2wdAW8c9wf3UrrJlwG1VWy/UEzbK3NrZ7smQn8kovz+Z3Gn0Yuptaeb4n/LhKByCfJ9+l5JdTMhYpu3usZdp28fvU0bPxr+jq9EC6T90YPLRVn+XT2UYKhugpmTJPtEw2twfidkYVyFoBt/CLgnlwpSoveveDpBe4tgmQ8cC907Air1vqra84MGDVStjdvgfmLUpcPl8HaZ+3PYyeq+RXTTAWeACKWe6qAq3OnxyOl7eHJxzI3vcWU8XBjtT+aFKVw6IV4/VKvftrzeXPCj+fBpz1NPnLnh3Oggy7yq1x2jAXb+Pk/CWfIV+DLff2NOf0uf+MpSv4zCsT4FRTCEtgTv+t/zK+PgFK96iuXFZVA9xDw1VwrcaVzGVxj6Nw0/HozcS8XwmX2qxAoNL1mqCoGBuZahSv9fW7ix8Z+wdDwXjaMqIbvXWzlvHMcapLMslz+G3t70vcTl6mZC1f1kO3fPxc9NOW1HivGrj2weCmMGS0tpsredpkTDfDSy7AiyYhJKh0W06fAdRefLWHVFYsXzdZxseqZPgVuHA5hx4j1kaOS27HnzcR6LcrD0cc5GYm0WPulOrbB078YebRVfpPOeH26fL6rudjZ0KEUulekLhMuiy4TLks8JHhVD7tcbIeml3piYwDcPia+TPcKmDQeun4u8XBmKh0W7dvZZd46lLiMm2bncam8GoYPg+oELbvK3lDzMNT8LLX5S0q8HaNUOvKLPsXAlblW4UqizD7fYrc1F7s1Uh6Gm2+Clhb4+6uSCl3aHqquta/+o0bCtlfcr6RBcN0QMd+JBmlBnHoPrugq/0NJibymTEittbEJdnt4itW5D/3TbZYri4Ercq3ClY8/LszYrZGSiyfhn86PbqqvWAtrl9tN6aGD88P4lulnzYtuDR2pg3lzZLuyNwwZkFzv+fPuCVmFRXmIQnhi7elGg7GbzMVurex7I/H9ufOq2L5dcHrceOnl+FugrbVyQrAweTuZf7QvphCMf/CIudg6ay999h9I/H3dMTttOZ/YtMVcbC8dlvlHqanHZPtL/b/g/bMy5dZvXt3pf8zWTvO5XCvwzokGs3MgvHRY5iEhfHrsrnH+vNH/mMdPyEklF5Q51kVobNIJOkqQNBeO8df8CS5c8Dfmwmf8i+Xs0f2sh7VM+jlGUc+f90+HKcrDuVaQnxTmcTkXAk7lWoUnLlyARx/3L962Wnjjn/7FO1Jnb/epdM8MG+ZImMx0cZDRMffTZZ3iy/Tqmf1Y8pABdm++afo6TojtknQQDuwfjBY3gjwu/nI6BLybaxWe2fE6rFyTfZy6Y/CT+dnHcbK1VjLBQH4MM6YmLzthLAxyJExufDG+zAFH8kr3CvmRxVJ1bfTnkTfGl7ntluQ6vNZzx7dSx/CK8wQ3LEGm+JjR0SepRGna4TKZsGWaII9L8LxbDCRJj8pTlq2SFXomfCez/f+xH+b+yF9NFuuft8eGq6+XdE0raQQk0aV/v2jT1+5IPH5c/7bc+1vj4j+YKsNSm7bI6jBWumxLi33Vufkmed+9Fzp0SJ6xFlvPkaN28o2zngH94BsjRa+znkz5z3/t7UEDZfGSba/I56GDbf1WXeHOMP9R2P6aGLFqKNw6OpirbJDHJXgOFQP7c60ibZavhqP1MO0u6OYx/ygSgRV/gGefM6dra62kiFpZYd0rUjeza3ekzt/+yyZJgQU7Hdb6DNJj/esl8OADYpKSEkmldabTtrTAmj9G7xfL37baP/Bk9ezakzhNNx0WL7Uz6UCG/mKH/9ZvkHerrkEDo0+UICsc9e1jPh02qOMSPPtDQGGOZ+14HSZOgycXy0q6nyRZo6/hpHQMjr/HrOktFi+F++dKkktLgvUEQa4ki55xn7SxYi0sXylX/lj2vSHZaHvehIcfsW8zYuu5fy7s3J26ng2bRE+qeqxWS7bMmicxY2lskv918VJ5rd8Qr6elRb6fvyiYRVODPC7B8lpRZMStAIeRebrBM282jBge/V0kAndMSm+IqzwMPSrkPRSC5mY4eSr3q+qOqI4e363dmdnQ3ZABdnZZshi9etqjBQ0no28hvC4E6tR74JA0edOJ4bUe5yq2sVqT6dmwKT5Gonqc6xmeaEg+azEdvZkcl3R0BMdRoNJK4NlMrozvF6cbzab2ZopfmVx73nTPfa9/O/oH6cTrySaVXi8xvNbTeCbeyCb0eNHhBdM6guNFsJfeWpdDIYqiBMc6sI2/A6jPnRZFUQKgHvH6pXX1I8ASwOfBbUVRAFn3Yc4M+3NupvkuQbwe9dDMJUBB3awoSsEQ7mwPX44amYs1/84gHgeiH6HVDCwEagKVk2h1naIiKMryoRnK5UvjGXuufS5HdZw6Ev0tWJ7CMS8ndlruQuBegnxi7pmz8c/Pi0SSj8srihfyY+gsX3T8DzH+JaxxfCeTgQRLmyqKUqBMAZY5v0jUnl4ObA9CjaIoxtmOeDqKRMaPABOBs4YFKYpilrOIlyOxf0jWg3YMuNukIkVRjHM34uU4UnWdr0PH9RWlUFlAioxctzGzh4BVvspRFMU0q4AHUxVwM34E6RHc7JciRVGMshnxbNx9vRMvWTIfAd8EVvsgSlEUc6xGvPqRW0Gv6XEfAeOBJ7IQpSiKOZ5APOpqevBufJCmw2xgLPBB+roURTHAB4gnZ+PSvHeSSUL8OmAwmuSjKLlmOzCIDNbTyHQmTD1QjXQinM4whqIomXEa8V41Scbp3chmClwEyf+9GngE0MfOKopZmoBHEc8tI42mfSyJJulkSikwFTkT9XEpqyiKdw4hE+eW4NMj7/w0vpPBwATgZqCXiQoUpZVTD7wArAD2+h3clPGddAOqgL7ISr69ga5AGdDWdOWKkqdcAM4hK+OcQZa9PgK8hTzr4qTJyv8Ptnj3ExxbJWkAAAAASUVORK5CYII="
					})
				})
			}
			var de = function (e) {
				return Object(C.jsx)("div", {
					style: {
						maxWidth: 1500,
						margin: "0 auto",
						padding: "0 30px"
					},
					children: e.children
				})
			};
			var le = function () {
				return Object(C.jsxs)(s.a, {
					style: {
						minHeight: "100vh"
					},
					children: [Object(C.jsx)(s.a.Header, {
						style: {
							color: "#fff",
							padding: 0
						},
						children: Object(C.jsx)(de, {
							children: Object(C.jsxs)(l.a, {
								align: "middle",
								gutter: 20,
								children: [Object(C.jsx)(y.a, {
									flex: "auto",
									children: Object(C.jsx)("img", {
										src: oe,
										alt: "",
										width: "40"
									})
								}), Object(C.jsx)(y.a, {
									style: {
										lineHeight: 1
									},
									children: Object(C.jsx)(b.a, {
										children: Object(C.jsx)(se, {})
									})
								})]
							})
						})
					}), Object(C.jsx)(s.a.Content, {
						style: {
							padding: "40px 0"
						},
						children: Object(C.jsx)(de, {
							children: Object(C.jsx)(ie, {})
						})
					})]
				})
			};
			n(422);
			i.a.render(Object(C.jsx)(r.a.StrictMode, {
				children: Object(C.jsx)(U, {
					children: Object(C.jsx)(le, {})
				})
			}), document.getElementById("root"))
		}
	},
	[
		[424, 1, 2]
	]
]);
//# sourceMappingURL=main.66cee348.chunk.js.map