import React from 'react';
// import {getDomain} from "utils"
// import {API_HOST} from 'config'
import PageView from './components/PageView'
import ListView from './components/ListView'
import AdminHeader from './components/AdminHeader'
import AuthMenu from 'pages/Auth/AuthMenu'

import get from 'lodash.get'


const section = {
  app: "avl-website2",
  type: "section",

  attributes: [
    { key: "section",
      type: "text",
      required: true
    },
    { key: "content",
      type: "richtext",
      required: true
    }
  ]
}

const format = {
  app: "avl-website2",
  type: "page",

  registerFormats: [section],

  attributes: [
    { key: "page",
      type: "text",
      required: true
    },
    { key: "index",
      type: "number",
      default: "props:index",
      editable: false
      // hidden: true
    },
    { key: "sections",
      type: "dms-format",
      format: "avl-website2+section",
      fullWidth: true,
      isArray: true
    },

    { key: "content",
      type: "richtext",
      required: true
    }
  ]
}


export const BLOG_POST = {
  app: "avl-website2",
  type: "blog-post",
  attributes: [
    { key: "title",
      type: "text",
      required: true
    },
    { key: "body",
      type: "richtext",
      required: true
    },
    { key: 'tags',
      type: 'text',
      isArray: true
    },
    { key: "url_slug",
      type: "text",
      required: false
    },
    { key: "bloggerId",
      name: "Blogger ID",
      type: "text",
      default: "props:user.id", // default value will be pulled from props.user.id
      editable: false
    },
    { key: "replyTo",
      name: "Reply To",
      type: "text",
      default: "props:blog-post.id", // default value will be pulled from props.blog-post.id
      editable: false
    }
  ]
}



const PageEdit = (props) => {
  console.log('edit props', props)
  return (
    <div> the edit page</div>
  )
}

const Blog = {
  type: "dms-content",
  // type: "dms-manager",
  wrappers: [
// wrapper order is important
// from index zero to i, higher index wrappers send props into lower index wrappers
// higher index wrappers do not see props from lower index wrappers
    "dms-manager",
    { type: "dms-provider",
      options: {
        buttonThemes: {
          reply: "buttonInfo"
        },
        authRules: {
          create: {
            args: ["props:user.authLevel"],
            comparator: al => +al >= 0
          },
          edit: {
            args: ["item:data.bloggerId", "props:user.id", "props:user.authLevel"],
            comparator: (arg1, arg2, arg3) => (+arg1 === +arg2) || (+arg3 === 10)
          },
          delete: {
            args: ["item:data.bloggerId", "props:user.id", "props:user.authLevel"],
            comparator: (arg1, arg2, arg3) => (+arg1 === +arg2) || (+arg3 === 10)
          },
          reply: {
            args: ["props:user.authLevel"],
            comparator: al => +al >= 0
          }
        }
      }
    },
    "dms-router",
    "show-loading",
    "dms-falcor",
    "with-auth"
  ],
  props: { format: BLOG_POST },
  children: [
    { type: "dms-header",
      props: {
      title: "Blog it Up",
        dmsActions: [{ action: "landing", label: 'landing' }],
        // dmsAction: 'list'
      },
      children: [
        {type:
          <div>
            <AuthMenu />
          </div>
        }
      ]
    },
    { type: (props) => {
        return (<div>Test 123</div>)
      },
      props: { dmsAction: "list" }

    },
    { type: "dms-landing",
      props: { dmsAction: "landing" },
      children: [
        {
          type: "dms-card",
          props: { dmsAction: "view" },
          wrappers: [
            { type: "dms-view",
              options: {
                type: 'blog-post',
                mapDataToProps: {
                  title: "item:data.title",
                  body: [
                    "item:data.bloggerId",
                    "item:data.body",
                    "item:data.tags",
                  ],
                  footer: [
                    "item:updated_at"
                  ]
                },
              }
            },
            "with-auth"
          ]
        }
      ]
    },
// dms-manager children are special
// they are only shown when the dms-manager state.stack.top.action === child.props.dmsAction
    { type: "dms-table",
      props: {
        dmsAction: "list",
        columns: [
          { path: "self:data.title",
            filter: "fuzzyText"
          },
          "self:data.bloggerId",
          { path: "self:updated_at",
            format: "date",
            disableFilters: true
          },
          "dms:edit",
          "dms:delete"
        ],
        filter: {
          args: ["self:data.replyTo"],
          comparator: arg1 => !Boolean(arg1),
          sortType: d => new Date(d).valueOf()
        }
      }
    },

    { type: "dms-card",
      props: { dmsAction: "view" },
      wrappers: [
        { type: "dms-view",
          options: {
            mapDataToProps: {
              title: "item:data.title",
              body: [
                "item:data.bloggerId",
                "item:data.body",
                "item:data.tags",
              ],
              footer: [
                "item:updated_at"
              ]
            },
          }
        },
        "with-auth"
      ]
    },
    { type: "dms-create",
      props: { dmsAction: "create" },
// dms-create defaults to dmsAction: "create"
// the prop is required here due to the wrapper
      wrappers: ["with-auth"]
    },

    { type: "dms-create",
      props: { dmsAction: "reply" },
      wrappers: ["with-auth"]
    },

    { type: "dms-edit",
      props: { dmsAction: "edit" },
      wrappers: ["with-auth"]
    },

    { type: "dms-card",
      props: { dmsAction: "delete" },
      wrappers: [
        { type: "dms-view",
          options: {
            mapDataToProps: {
              title: "item:data.title",
              body: [
                "item:data.bloggerId",
                "item:data.body",
                "item:data.tags",
              ],
              footer: [
                "item:updated_at"
              ]
            },
            actions: [{
              action: "api:delete",
              showConfirm: true,
              seedProps: props => {
// these ids are sent to the api:delete function
                const postId = +get(props, ["blog-post", "id"], null),
                    posts = get(props, "dataItems", []).map(d => ({ id: +d.id, replyTo: +d.data.replyTo }));

                const getReplies = (posts, id, final) => {
                  const replies = posts.filter(d => d.replyTo === id);
                  if (!replies.length) return final;

                  for (const reply of replies) {
                    final.push(...getReplies(posts, reply.id, [reply.id]));
                  }

                  return final;
                }
                return getReplies(posts, postId, [postId]);
              }
            }]
          }
        },
        "with-auth"
      ]
    }
  ]
}

const Home = {
  type: "dms-content", // (props) => <div>{props.children}</div>,  // top level component for managing data items
  wrappers: [
    "dms-manager",
    "dms-provider",
    "dms-router",
    "show-loading",
    "dms-falcor",
    "with-auth"
  ],
  props: {
    format: BLOG_POST,
    className: "",
  },
  children: [
    { type: "dms-table",
      props: {
        dmsAction: "list",
        columns: [
          { path: "self:data.title",
            filter: "fuzzyText"
          },
          "self:data.bloggerId",
          { path: "self:updated_at",
            format: "date",
            disableFilters: true
          },
          "dms:edit",
          "dms:delete"
        ],
        filter: {
          args: ["self:data.replyTo"],
          comparator: arg1 => !Boolean(arg1),
          sortType: d => new Date(d).valueOf()
        }
      }
    },

    { type: "dms-landing",
      props: { dmsAction: "list" },
      children: [
        {
          type: "dms-card",
          props: { dmsAction: "view" },
          wrappers: [
            { type: "dms-view",
              options: {
              type: 'blog-post',
                mapDataToProps: {
                  title: "item:data.title",
                  body: [
                    "item:data.bloggerId",
                    "item:data.body",
                    "item:data.tags",
                  ],
                  footer: [
                    "item:updated_at"
                  ]
                },
              }
            },
            "with-auth"
          ]
        }
      ]
    },
  ]

}

const config = [
  {
    name:'Blog',
    path: "/",
    auth: true,
    // authLevel: 5,
    component: Blog
  },
  {
    name:'Home',
    path: "/home",
    exact: true,
    auth: true,
    component: Home
  }
]

export default config;
