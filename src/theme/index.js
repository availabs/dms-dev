const ppdaf = () => {

  // const bg = 'gray-50'
  const primary =  'nuetral'
  const highlight =  'white'
  const accent =  'blue'
  // const secondary =  'green'
  
  return {
    graphColors: [ '#1e40af','#93c5fd','#1d4ed8','#bfdbfe',],
    graphCategorical:  ['#eff6ff','#dbeafe','#bfdbfe','#93c5fd','#60a5fa','#3b82f6','#2563eb','#1d4ed8','#1e40af','#1e3a8a'], //

    sidenav: (opts = {}) => {
      const {color = 'white', size = 'compact'} = opts
      let colors = {
        white: {
          contentBg: `bg-${highlight}`,
          contentBgAccent: `bg-neutral-100`,
          accentColor: `${accent}-600`,
          accentBg: `hover:bg-${accent}-400`,
          borderColor: `border-${primary}-100`,
          textColor: `text-${primary}-600`,
          textColorAccent: `text-slate-800`,
          highlightColor: `text-${primary}-800`,
        },
         dark: {
          contentBg: `bg-neutral-800`,
          contentBgAccent: `bg-neutral-900`,
          accentColor: `white`,
          accentBg: ``,
          borderColor: `border-neutral-700`,
          textColor: `text-slate-300`,
          textColorAccent: `text-slate-100`,
          highlightColor: `text-${highlight}`,
        },
        bright: {
          contentBg: `bg-${accent}-700`,
          accentColor: `${accent}-400`,
          accentBg: `hover:bg-${accent}-400`,
          borderColor: `border-${accent}-600`,
          textColor: `text-${highlight}`,
          highlightColor: `text-${highlight}-500`,
        }
      }

      let sizes = {
        none: {
          wrapper: "w-0 overflow-hidden",
          sideItem: "flex mx-2 pr-4 py-2 text-base hover:pl-2",
          topItem: "flex items-center text-sm px-4 border-r h-12",
          icon: "mr-3 text-lg",
        },
        compact: {
          fixed: 'ml-0 md:ml-44',
          wrapper: "w-44",
          sideItem: "flex mx-2 pr-4 py-2 text-base hover:pl-2",
          topItem: "flex items-center text-sm px-4 border-r h-12",
          icon: "mr-3 text-lg",
        },
        full: {
          fixed: 'ml-0 md:ml-64',
          wrapper: "w-64",
          sideItem: "flex mx-4 pr-4 py-4 text-base font-base border-b hover:pl-4",
          topItem: "flex pr-4 py-2 text-sm font-light",
          icon: "mr-4 text-2xl",
        },
        mini: {
          fixed: 'ml-0 md:ml-20',
          wrapper: "w-20 overflow-x-hidden",
          sideItem: "flex pr-4 py-4 text-base font-base border-b",
          topItem: "flex px-4 items-center text-sm font-light ",
          icon: "w-20 mr-4 text-4xl",
        },
        micro: {
          fixed: 'ml-0 md:ml-14',
          wrapper: "w-14 overflow-x-hidden",
          sideItem: "flex text-base font-base",
          topItem: "flex mx-6 pr-4 py-2 text-sm font-light",
          icon: "w-12 text-2xl hover:bg-neutral-900 px-2 py-3 my-2 rounded-lg mr-4 hover:text-blue-500",
        },

      }

      return {
        fixed: `md:${sizes[size].fixed}`,
        logoWrapper: `${sizes[size].wrapper} ${colors[color].contentBgAccent} ${colors[color].textColorAccent}`,
        sidenavWrapper: `${colors[color].contentBg} ${sizes[size].wrapper} h-full hidden md:flex z-20`,
        menuIconSide: ` text-${colors[color].accentColor} ${sizes[size].icon} group-hover:${colors[color].highlightColor}`,
        itemsWrapper: `p-1  ${colors[color].borderColor} ${sizes[size].wrapper} pt-4`,
        navitemSide: ` 
            group font-sans 
            ${sizes[size].sideItem} ${colors[color].textColor} ${colors[color].borderColor} 
            hover:${colors[color].highlightColor} 
            focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
            transition-all cursor-pointer
         `,

        navitemSideActive: `
            group font-sans 
            ${sizes[size].sideItem} text-blue-500 ${colors[color].borderColor} 
            hover:${colors[color].highlightColor} 
            focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
            transition-all cursor-pointer
          `,
          vars: {
            colors,
            sizes
          }
        }
    },


    /* -----
         Top Nav Theme Components Minimal
        ------*/
    topnav:  (opts = {}) => {
      const {color = 'white', size = 'compact'} = opts
      let colors = {
        white: {
          contentBg: `bg-gray-100`,
          accentColor: `${accent}-600`,
          accentBg: `hover:bg-${accent}-600`,
          borderColor: `border-${primary}-100`,
          textColor: `text-${primary}-600`,
          highlightColor: `text-${highlight}`,
        },
        bright: {
          contentBg: `bg-${accent}-700`,
          accentColor: `${accent}-400`,
          accentBg: `hover:bg-${accent}-400`,
          borderColor: `border-${accent}-600`,
          textColor: `text-${highlight}`,
          highlightColor: `text-${highlight}`,
        }
      }
      let sizes = {
        compact: {
          menu: 'hidden md:flex flex-1 justify-end',
          sideItem: "flex mx-6 pr-4 py-2 text-sm font-light hover:pl-4",
          topItem: `flex items-center text-sm px-4 border-r h-12 ${colors[color].textColor} ${colors[color].borderColor} 
            ${colors[color].accentBg} hover:${colors[color].highlightColor}`,
          activeItem: `flex items-center text-sm px-4 border-r h-12 ${colors[color].textColor} ${colors[color].borderColor} 
            ${colors[color].accentBg} hover:${colors[color].highlightColor}`,
          icon: "mr-3 text-lg",
          responsive: 'md:hidden'
        },
        inline: {
          menu: 'flex flex-1',
          sideItem: "flex mx-4 pr-4 py-4 text-base font-base border-b hover:pl-4",
          topItem: `flex px-4 py-2 mx-2 font-medium text-gray-400 border-b-2 ${colors[color].textColor} ${colors[color].borderColor} 
          hover:border-gray-300 hover:text-gray-700 border-gray-100 `,
          activeItem: `flex px-4 py-2 mx-2 font-medium text-blue-600 border-b-2 ${colors[color].textColor} ${colors[color].borderColor} border-blue-600 `,
          icon: "mr-4 text-2xl",
          responsive: 'hidden'
        }

      }


      return {
        topnavWrapper: `w-full ${colors[color].contentBg} border-b border-gray-200`,
        topnavContent: `flex w-full h-full`,
        topnavMenu: `${sizes[size].menu} h-full overflow-x-auto overflow-y-hidden scrollbar-sm`,
        menuIconTop: `text-${colors[color].accentColor} ${sizes[size].icon} group-hover:${colors[color].highlightColor}`,
        menuOpenIcon: `fa fa-bars`,
        menuCloseIcon: `fa fa-xmark fa-fw"`,
        navitemTop: `
            group font-sans 
            ${sizes[size].topItem} 
            focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
            transition cursor-pointer
        `,
        //`px-4 text-sm font-medium tracking-widest uppercase inline-flex items-center  border-transparent  leading-5 text-white hover:bg-white hover:text-darkblue-500 border-gray-200 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out h-full`,
        topmenuRightNavContainer: "hidden md:block h-full",
        navitemTopActive: 
          ` group font-sans
            ${sizes[size].activeItem}
            focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
            transition cursor-pointer
          `,
        mobileButton:
          `${sizes[size].responsive} ${colors[color].contentBg} inline-flex items-center justify-center p-2  text-gray-400 hover:bg-gray-100 `,
        vars: {
            colors,
            sizes
          }
      }

    },

    select: (opts={}) => {
      const { color = 'white' } = opts
      let colors = {
        white: 'white',
        transparent: 'gray-100 border border-gray-200 shadow-sm'
      }
      return {
        menuWrapper: `bg-${colors[color]} my-1`,
        menuItemActive: `px-4 py-2 cursor-not-allowed bg-${accent}-200 border-1 focus:border-${accent}-300`,
        menuItem: `px-4 py-2 cursor-pointer hover:bg-blue-100 border-1 border-${colors[color]} focus:border-blue-300`,
        select: `bg-${colors[color]} w-full flex flex-row flex-wrap justify-between px-4 py-2 cursor-pointer focus:border-blue-300`,
        selectIcon: `fal fa-angle-down text-gray-400 pt-2`
      }
    },

    table: (opts = {}) => {
            const {color = 'white', size = 'compact'} = opts
            let colors = {
                white: 'bg-white hover:bg-gray-100',
                gray: 'bg-gray-100 hover:bg-gray-200',
                transparent: 'gray-100'
            }

            let sizes = {
                compact: 'px-4 py-1',
                full: 'px-10 py-5'
            }
            return {
                tableHeader:
                    `${sizes[size]} pb-1 border-b-2 border-gray-300 bg-gray-200 text-left font-medium text-gray-700 uppercase first:rounded-tl-md last:rounded-tr-md`,
                tableInfoBar: "bg-white",
                tableRow: `${colors[color]} transition ease-in-out duration-150`,
                tableRowStriped: `bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150`,
                tableCell: `${sizes[size]} whitespace-no-wrap`,
                inputSmall: 'w-24',
                vars: {
                    color: colors,
                    size: sizes
                }
            }
        },

    tabpanel: (opts = {}) => {
            const {color = 'white', size = 'compact'} = opts
            let colors = {
                white: 'bg-white hover:bg-gray-100',
                transparent: 'gray-100'
            }

            let sizes = {
                compact: 'px-4 py-1',
                full: 'px-10 py-5'
            }
            return {
                tabpanelWrapper: 'flex flex-row w-full h-full',
                tabWrapper: 'flex flex-col',
                tab: `px-4 py-2 hover:text-gray-800 cursor-pointer border-r-2  text-center text-gray-500`,
                tabActive: `px-4 py-2 text-${accent}-500 border-r-2 border-blue-500 text-center`,
                icon: '',
                tabName: '',
                contentWrapper: 'bg-white p-4 flex-1 h-full',
                vars: {
                    color: colors,
                    size: sizes
                }
            }
        },
        button: (opts = {}) => {
            const {color = 'white', size = 'base', width = 'block'} = opts
            let colors = {
                white: `
                    border border-gray-300  text-gray-700 bg-white hover:text-gray-500
                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300
                    active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out
                    disabled:cursor-not-allowed
                `,
                transparent: `
                    border border-gray-300  text-gray-700 bg-white hover:text-gray-500
                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300
                    active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out
                    disabled:cursor-not-allowed
                `,
                primary: '',
                danger: ''
            }

            let sizes  = { 
                base: 'px-1 py-1 leading-5 font-medium',
                sm: 'text-sm px-2 py-2 leading-5 font-medium',
                
                
            }

            let widths = {
                'block': '',
                'full' : 'w-full'
            }

            return {
                button: `
                    inline-flex items-center justify-items-center text-center
                    ${colors[color]} ${sizes[size]} ${widths[width]}
                `,
                vars: {
                    color: colors,
                    size: sizes,
                    width: widths
                }
            } 
        },
    /* ------------------------- */
    shadow: "shadow",
    ySpace: "py-4",
    text: "text-gray-800",
    textContrast: "text-white",
    border: "broder-gray-400",

    textInfo: "text-blue-400",
    bgInfo: "bg-blue-400",
    borderInfo: "border-blue-400",

    textSuccess: "text-blue-400",
    bgSuccess: "bg-blue-400",
    borderSuccess: "border-blue-400",

    textDanger: "text-red-400",
    bgDanger: "bg-red-400",
    borderDanger: "border-red-400",

    textWarning: "text-yellow-400",
    bgWarning: "bg-yellow-400",
    borderWarning: "border-yellow-400",

    textLight: "text-gray-400", // <-- for text styled like placeholder but can't be selected with ::placeholder
    placeholder: "placeholder-gray-400",

    topMenuBorder: "border-b border-gray-200",
    topMenuScroll: "",
    headerShadow: "",
    navText: "text-gray-100",

    navMenu: "h-full relative",
    navMenuOpen: "bg-darkblue-500 text-white shadow-lg w-56 rounded-t-lg",
    navMenuBg: "bg-darkblue-500 bb-rounded-10 shadow-lg text-white rounded-b-lg",
    navMenuItem:
      "hover:font-medium cursor-pointer px-2 py-1 text-lg font-semibold",

    bg: "bg-gray-50",

    menuBg: "bg-white z-50",
    menuBgHover: "",
    menuBgActive: "bg-blue-200",
    menuBgActiveHover: "hover:bg-blue-300",
    menuText: "text-gray-100",
    menuTextHover: "hover:text-gray-700",
    menuTextActive: "text-blue-500",
    menuTextActiveHover: "hover:text-blue-700",

    headerBg: "bg-gray-200",
    headerBgHover: "hover:bg-gray-400",

    inputBg: "bg-white disabled:bg-gray-200 cursor-pointer focus:outline-none",
    inputBorder:
      "rounded border-0 border-transparent hover:border-gray-300 focus:border-gray-600 disabled:border-gray-200",
    inputBgDisabled: "bg-gray-200 cursor-not-allowed focus:outline-none",
    inputBorderDisabled: "rounded border-2 border-gray-200 hover:border-gray-200",
    inputBgFocus: "bg-white cursor-pointer focus:outline-none",
    inputBorderFocus:
      "rounded border-2 border-transparent hover:border-gray-600 focus:border-gray-600 border-gray-600",

    textBase: "text-base",
    textSmall: "text-sm",
    textLarge: "text-lg",
    paddingBase: "py-1 px-2",
    paddingSmall: "py-0 px-1",
    paddingLarge: "py-2 px-4",

    contentBg: "bg-white",

    accent1: "bg-blue-100",
    accent2: "bg-gray-300",
    accent3: "bg-gray-400",
    accent4: "bg-gray-500",

    highlight1: "bg-blue-200",
    highlight2: "bg-blue-300",
    highlight3: "bg-blue-400",
    highlight4: "bg-blue-500",

    width: "",

    transition: "transition ease-in-out duration-150",
    // button: `
    //     inline-flex items-center
    //     px-4 py-2 border border-gray-300
    //     text-sm leading-5 font-medium
    //     rounded-md text-gray-700 bg-white
    //     hover:text-gray-500
    //     focus:outline-none focus:shadow-outline-blue focus:border-blue-300
    //     active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out
    //     disabled:cursor-not-allowed`,
    buttonPrimary:
      "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out disabled:cursor-not-allowed",

    tableRow: "bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-150",
    tableRowStriped:
      "bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150",

    tableCell: "px-4 py-1 whitespace-no-wrap",

    tableHeader:
      "px-4 py-2 pb-1 border-b-2 border-gray-300 bg-gray-200 text-left font-medium text-gray-700 uppercase first:rounded-tl-md last:rounded-tr-md",
  }
};

const PPDAF_THEME = ppdaf();
export default PPDAF_THEME