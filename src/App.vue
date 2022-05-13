<script>
import { toRefs, ref, onMounted } from 'vue'
import hubspotform from '../src/components/HubspotForm.vue'
import VueWriter from 'vue-writer'
import AOS from "aos";
import 'aos/dist/aos.css'


export default {
  components: { VueWriter, hubspotform},
  setup(props) {
    const isMenu  = ref(false)
    const isModel  = ref(false)
    const selected = ref(1)
    const isContact = ref(false)
     onMounted(() => {
      AOS.init();
    });

    return{
        isMenu,
        selected,
        isModel,
        isContact,
        showMenu(){
            isMenu.value = !isMenu.value
        },
        select(i) {
            selected.value = i;
        },
        scrollToDiv(div){
            let element = document.getElementById(div);
            window.scrollTo(0, element.offsetTop - document.getElementById(div).offsetHeight)
        },
        showModel(){
            isModel.value = true
        }
    }
  }
}
</script>

<template>
    <div class="h-screen font-sans" :class="isModel || isContact ? 'overflow-hidden' : ''">
    <nav class="flex items-center justify-between flex-wrap bg-white px-6 py-4">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
<svg width="196" class="hidden lg:block" height="45" viewBox="0 0 1541 267" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1292.25" y="99.4023" width="248.629" height="113.313" rx="56.6565" fill="#715BFF"/>
<path d="M20.6036 212V58.5689H49.098V187.889H129.321V212H20.6036ZM148.929 212V94.954H176.328V212H148.929ZM162.738 75.6655C157.624 75.6655 153.386 74.0581 150.025 70.8434C146.81 67.6286 145.203 63.7563 145.203 59.2265C145.203 54.5505 146.81 50.6781 150.025 47.6095C153.386 44.3948 157.624 42.7874 162.738 42.7874C167.852 42.7874 172.017 44.3217 175.232 47.3903C178.593 50.3128 180.273 54.039 180.273 58.5689C180.273 63.391 178.666 67.4825 175.451 70.8434C172.236 74.0581 167.998 75.6655 162.738 75.6655ZM278.445 93.6389C287.797 93.6389 296.126 95.4654 303.432 99.1185C310.885 102.772 316.73 108.397 320.967 115.996C325.205 123.448 327.324 133.093 327.324 144.929V212H299.925V148.436C299.925 138.061 297.441 130.316 292.473 125.202C287.651 120.087 280.856 117.53 272.088 117.53C265.659 117.53 259.96 118.845 254.992 121.476C250.024 124.106 246.151 128.051 243.375 133.312C240.745 138.426 239.43 144.929 239.43 152.819V212H212.031V94.954H238.114V126.517L233.512 116.873C237.603 109.42 243.521 103.721 251.266 99.7761C259.156 95.6846 268.216 93.6389 278.445 93.6389ZM417.053 213.534C404.048 213.534 392.651 210.977 382.86 205.863C373.216 200.602 365.691 193.442 360.284 184.382C355.023 175.323 352.393 165.021 352.393 153.477C352.393 141.787 354.95 131.485 360.065 122.572C365.325 113.512 372.485 106.425 381.545 101.31C390.751 96.196 401.199 93.6389 412.889 93.6389C424.287 93.6389 434.442 96.123 443.356 101.091C452.27 106.059 459.284 113.073 464.398 122.133C469.512 131.193 472.07 141.86 472.07 154.135C472.07 155.304 471.996 156.619 471.85 158.08C471.85 159.541 471.777 160.929 471.631 162.244H374.093V144.052H457.165L446.425 149.751C446.571 143.029 445.183 137.111 442.26 131.997C439.338 126.882 435.319 122.864 430.205 119.941C425.236 117.019 419.465 115.558 412.889 115.558C406.167 115.558 400.249 117.019 395.135 119.941C390.167 122.864 386.221 126.955 383.299 132.216C380.522 137.33 379.134 143.394 379.134 150.408V154.792C379.134 161.806 380.741 168.016 383.956 173.423C387.171 178.83 391.701 182.994 397.546 185.917C403.391 188.839 410.113 190.3 417.711 190.3C424.287 190.3 430.205 189.278 435.465 187.232C440.726 185.186 445.402 181.971 449.493 177.588L464.179 194.465C458.918 200.602 452.27 205.351 444.233 208.712C436.342 211.927 427.282 213.534 417.053 213.534ZM549.42 215.069C536.854 215.069 524.725 213.534 513.035 210.466C501.491 207.251 492.066 203.159 484.76 198.191L499.007 166.19C505.875 170.574 513.766 174.227 522.679 177.149C531.739 179.926 540.726 181.314 549.64 181.314C555.631 181.314 560.453 180.802 564.106 179.779C567.759 178.61 570.389 177.149 571.997 175.396C573.75 173.496 574.627 171.304 574.627 168.82C574.627 165.313 573.019 162.537 569.805 160.491C566.59 158.445 562.425 156.765 557.311 155.45C552.197 154.135 546.498 152.819 540.214 151.504C534.077 150.189 527.867 148.509 521.584 146.463C515.446 144.417 509.82 141.787 504.706 138.572C499.592 135.211 495.427 130.901 492.212 125.64C488.998 120.234 487.39 113.439 487.39 105.256C487.39 96.0499 489.874 87.7208 494.843 80.2684C499.957 72.8161 507.556 66.825 517.638 62.2951C527.721 57.7652 540.288 55.5003 555.338 55.5003C565.421 55.5003 575.284 56.6693 584.929 59.0073C594.719 61.1991 603.413 64.4869 611.012 68.8707L597.642 101.091C590.335 97.1459 583.102 94.2234 575.942 92.3237C568.782 90.278 561.841 89.2551 555.119 89.2551C549.128 89.2551 544.306 89.9127 540.653 91.2278C537 92.3968 534.369 94.0042 532.762 96.0499C531.155 98.0957 530.351 100.434 530.351 103.064C530.351 106.425 531.885 109.128 534.954 111.174C538.169 113.073 542.333 114.681 547.448 115.996C552.708 117.165 558.407 118.407 564.544 119.722C570.828 121.037 577.038 122.718 583.175 124.763C589.459 126.663 595.157 129.293 600.272 132.654C605.386 135.869 609.478 140.18 612.546 145.586C615.761 150.847 617.368 157.495 617.368 165.532C617.368 174.446 614.811 182.702 609.697 190.3C604.729 197.753 597.203 203.744 587.121 208.274C577.184 212.804 564.617 215.069 549.42 215.069ZM712.559 91.2278C721.765 91.2278 730.094 93.1274 737.546 96.9267C744.999 100.58 750.844 106.279 755.081 114.023C759.465 121.768 761.657 131.777 761.657 144.052V212H720.011V150.847C720.011 142.372 718.258 136.234 714.751 132.435C711.39 128.49 706.641 126.517 700.504 126.517C696.12 126.517 692.102 127.54 688.448 129.586C684.795 131.485 681.946 134.481 679.9 138.572C677.854 142.664 676.832 147.997 676.832 154.573V212H635.186V49.363H676.832V126.955L667.187 117.092C671.717 108.471 677.927 102.041 685.818 97.8034C693.709 93.4197 702.623 91.2278 712.559 91.2278ZM851.294 213.973C837.266 213.973 824.992 211.342 814.471 206.082C804.096 200.675 795.986 193.369 790.141 184.163C784.442 174.811 781.593 164.217 781.593 152.381C781.593 140.545 784.369 130.024 789.922 120.818C795.621 111.466 803.438 104.233 813.375 99.1185C823.311 93.858 834.49 91.2278 846.911 91.2278C858.601 91.2278 869.268 93.6389 878.912 98.461C888.556 103.137 896.228 110.078 901.927 119.284C907.625 128.49 910.475 139.668 910.475 152.819C910.475 154.281 910.402 155.961 910.256 157.861C910.11 159.76 909.963 161.514 909.817 163.121H815.786V141.203H887.679L871.898 147.34C872.044 141.933 871.021 137.257 868.829 133.312C866.784 129.366 863.861 126.298 860.062 124.106C856.409 121.914 852.098 120.818 847.13 120.818C842.161 120.818 837.778 121.914 833.979 124.106C830.325 126.298 827.476 129.439 825.43 133.531C823.384 137.476 822.362 142.152 822.362 147.559V153.915C822.362 159.76 823.531 164.802 825.869 169.039C828.353 173.277 831.86 176.565 836.39 178.903C840.919 181.095 846.326 182.191 852.609 182.191C858.454 182.191 863.423 181.387 867.514 179.779C871.752 178.026 875.916 175.396 880.008 171.889L901.927 194.684C896.228 200.968 889.214 205.79 880.885 209.151C872.555 212.365 862.692 213.973 851.294 213.973ZM991.668 213.973C977.64 213.973 965.366 211.342 954.845 206.082C944.47 200.675 936.36 193.369 930.515 184.163C924.816 174.811 921.967 164.217 921.967 152.381C921.967 140.545 924.743 130.024 930.296 120.818C935.995 111.466 943.812 104.233 953.749 99.1185C963.685 93.858 974.864 91.2278 987.285 91.2278C998.975 91.2278 1009.64 93.6389 1019.29 98.461C1028.93 103.137 1036.6 110.078 1042.3 119.284C1048 128.49 1050.85 139.668 1050.85 152.819C1050.85 154.281 1050.78 155.961 1050.63 157.861C1050.48 159.76 1050.34 161.514 1050.19 163.121H956.16V141.203H1028.05L1012.27 147.34C1012.42 141.933 1011.4 137.257 1009.2 133.312C1007.16 129.366 1004.24 126.298 1000.44 124.106C996.783 121.914 992.472 120.818 987.504 120.818C982.536 120.818 978.152 121.914 974.353 124.106C970.699 126.298 967.85 129.439 965.804 133.531C963.758 137.476 962.736 142.152 962.736 147.559V153.915C962.736 159.76 963.905 164.802 966.243 169.039C968.727 173.277 972.234 176.565 976.764 178.903C981.293 181.095 986.7 182.191 992.983 182.191C998.828 182.191 1003.8 181.387 1007.89 179.779C1012.13 178.026 1016.29 175.396 1020.38 171.889L1042.3 194.684C1036.6 200.968 1029.59 205.79 1021.26 209.151C1012.93 212.365 1003.07 213.973 991.668 213.973ZM1122.84 213.973C1107.64 213.973 1095.8 210.247 1087.33 202.794C1078.85 195.196 1074.62 183.798 1074.62 168.601V66.6788H1116.26V168.163C1116.26 172.4 1117.43 175.761 1119.77 178.245C1122.11 180.583 1125.1 181.752 1128.75 181.752C1133.72 181.752 1137.96 180.51 1141.47 178.026L1151.77 207.178C1148.26 209.516 1143.95 211.196 1138.84 212.219C1133.72 213.388 1128.39 213.973 1122.84 213.973ZM1057.3 128.709V97.5842H1143.44V128.709H1057.3ZM1210.75 213.973C1200.67 213.973 1190.81 212.804 1181.16 210.466C1171.66 208.128 1163.99 205.205 1158.15 201.698L1170.64 173.204C1176.19 176.565 1182.7 179.268 1190.15 181.314C1197.6 183.213 1204.91 184.163 1212.07 184.163C1219.08 184.163 1223.9 183.433 1226.53 181.971C1229.31 180.51 1230.7 178.537 1230.7 176.053C1230.7 173.715 1229.38 172.035 1226.75 171.012C1224.27 169.843 1220.91 168.966 1216.67 168.382C1212.58 167.797 1208.05 167.14 1203.08 166.409C1198.11 165.678 1193.07 164.729 1187.96 163.56C1182.99 162.244 1178.38 160.345 1174.15 157.861C1170.06 155.23 1166.77 151.723 1164.28 147.34C1161.8 142.956 1160.56 137.403 1160.56 130.682C1160.56 123.083 1162.75 116.361 1167.13 110.516C1171.66 104.525 1178.24 99.8492 1186.86 96.4883C1195.48 92.9813 1206 91.2278 1218.42 91.2278C1226.75 91.2278 1235.15 92.1046 1243.63 93.858C1252.25 95.4654 1259.48 97.9495 1265.33 101.31L1252.84 129.586C1246.99 126.225 1241.15 123.96 1235.3 122.791C1229.46 121.476 1223.9 120.818 1218.64 120.818C1211.63 120.818 1206.66 121.622 1203.74 123.229C1200.96 124.837 1199.57 126.809 1199.57 129.147C1199.57 131.485 1200.81 133.312 1203.3 134.627C1205.78 135.796 1209.07 136.746 1213.16 137.476C1217.4 138.061 1222 138.718 1226.97 139.449C1231.94 140.034 1236.91 140.983 1241.88 142.298C1246.99 143.614 1251.59 145.586 1255.68 148.216C1259.92 150.701 1263.28 154.135 1265.77 158.518C1268.25 162.756 1269.49 168.236 1269.49 174.957C1269.49 182.264 1267.23 188.839 1262.7 194.684C1258.31 200.529 1251.74 205.205 1242.97 208.712C1234.35 212.219 1223.61 213.973 1210.75 213.973Z" fill="url(#paint0_linear_782_3082)"/>
<path d="M1328.14 184.93V127.056H1353.19C1358.37 127.056 1362.83 127.91 1366.58 129.619C1370.33 131.272 1373.22 133.67 1375.26 136.812C1377.3 139.953 1378.32 143.702 1378.32 148.056C1378.32 152.355 1377.3 156.076 1375.26 159.217C1373.22 162.359 1370.33 164.784 1366.58 166.493C1362.83 168.147 1358.37 168.973 1353.19 168.973H1335.58L1341.53 162.938V184.93H1328.14ZM1341.53 164.426L1335.58 158.06H1352.44C1356.58 158.06 1359.67 157.178 1361.7 155.414C1363.74 153.65 1364.76 151.198 1364.76 148.056C1364.76 144.859 1363.74 142.379 1361.7 140.615C1359.67 138.851 1356.58 137.969 1352.44 137.969H1335.58L1341.53 131.603V164.426ZM1387.79 184.93V127.056H1412.84C1418.02 127.056 1422.49 127.91 1426.23 129.619C1429.98 131.272 1432.88 133.67 1434.91 136.812C1436.95 139.953 1437.97 143.702 1437.97 148.056C1437.97 152.355 1436.95 156.076 1434.91 159.217C1432.88 162.304 1429.98 164.674 1426.23 166.328C1422.49 167.981 1418.02 168.808 1412.84 168.808H1395.23L1401.18 162.938V184.93H1387.79ZM1424.58 184.93L1410.11 163.93H1424.41L1439.05 184.93H1424.58ZM1401.18 164.426L1395.23 158.143H1412.1C1416.23 158.143 1419.32 157.261 1421.36 155.497C1423.39 153.678 1424.41 151.198 1424.41 148.056C1424.41 144.859 1423.39 142.379 1421.36 140.615C1419.32 138.851 1416.23 137.969 1412.1 137.969H1395.23L1401.18 131.603V164.426ZM1476.6 185.922C1472.02 185.922 1467.78 185.178 1463.87 183.69C1460.01 182.202 1456.65 180.107 1453.78 177.407C1450.97 174.706 1448.76 171.536 1447.17 167.899C1445.62 164.261 1444.85 160.292 1444.85 155.993C1444.85 151.694 1445.62 147.725 1447.17 144.087C1448.76 140.45 1451 137.28 1453.86 134.579C1456.73 131.879 1460.09 129.784 1463.95 128.296C1467.81 126.808 1472 126.064 1476.52 126.064C1481.09 126.064 1485.28 126.808 1489.08 128.296C1492.94 129.784 1496.28 131.879 1499.09 134.579C1501.95 137.28 1504.19 140.45 1505.78 144.087C1507.38 147.67 1508.18 151.639 1508.18 155.993C1508.18 160.292 1507.38 164.288 1505.78 167.981C1504.19 171.619 1501.95 174.788 1499.09 177.489C1496.28 180.135 1492.94 182.202 1489.08 183.69C1485.28 185.178 1481.12 185.922 1476.6 185.922ZM1476.52 174.513C1479.11 174.513 1481.48 174.072 1483.63 173.19C1485.83 172.308 1487.76 171.04 1489.41 169.387C1491.07 167.733 1492.34 165.777 1493.22 163.517C1494.15 161.257 1494.62 158.749 1494.62 155.993C1494.62 153.237 1494.15 150.729 1493.22 148.469C1492.34 146.209 1491.07 144.253 1489.41 142.599C1487.82 140.946 1485.91 139.678 1483.71 138.796C1481.5 137.914 1479.11 137.473 1476.52 137.473C1473.93 137.473 1471.53 137.914 1469.32 138.796C1467.17 139.678 1465.27 140.946 1463.62 142.599C1461.97 144.253 1460.67 146.209 1459.73 148.469C1458.85 150.729 1458.41 153.237 1458.41 155.993C1458.41 158.694 1458.85 161.202 1459.73 163.517C1460.67 165.777 1461.94 167.733 1463.54 169.387C1465.19 171.04 1467.12 172.308 1469.32 173.19C1471.53 174.072 1473.93 174.513 1476.52 174.513Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_782_3082" x1="-326.653" y1="267" x2="1275" y2="267" gradientUnits="userSpaceOnUse">
<stop stop-color="#0089FF"/>
<stop offset="0.941954" stop-color="#8255FF"/>
</linearGradient>
</defs>
</svg>
<img class="lg:hidden" src="./assets/images/32.png" alt="ineSheets Pro">
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-purple border-purple" @click="showMenu">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block lg:hidden lg:items-center lg:w-auto" v-show="isMenu">
    <div class="text-sm lg:flex-grow text-right font-bold mr-4">
     <button
      @click="scrollToDiv('featuresDiv')"
       class="block mt-4 lg:inline-block lg:mt-0 text-textGray font-weight hover:text-purple mr-4">
        Features
      </button>
      <button @click="scrollToDiv('priceDiv')"
        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
        Plan
      </button>
       <button
        @click="showModel"
        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
        Sign up
      </button>
    </div>
  </div>
  <div class="w-full block xs:hidden flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow text-right font-bold mr-4">
      <button
      @click="scrollToDiv('featuresDiv')"
       class="block mt-4 lg:inline-block lg:mt-0 text-textGray font-weight hover:text-purple mr-4">
        Features
      </button>
      <button href="" @click="scrollToDiv('priceDiv')"
        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
        Plan
      </button>
        <button class="block mt-4 lg:inline-block lg:mt-0 font-weight text-textGray hover:text-purple mr-4"
        @click="isContact = true">
        Contact Us
      </button>
        <!-- <button class="block mt-4 lg:inline-block lg:mt-0 font-weight text-textGray hover:text-purple"
        @click="showModel">
        Signup
      </button>-->
       <button
                     @click="showModel"
                      class="block lg:inline-block px-5 py-2 text-white 
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo rounded-3xl mr-4">Sign Up</button>
                   
                   <a href="https://app.linesheetspro.com/login" target="_blank" title="LineSheets Pro Login"
                      class="block lg:inline-block px-5 py-2 text-white 
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo rounded-3xl">Sign In</a>
    </div>
  </div>
</nav>
    <div class="bg-gray lg:h-[35%] xs:h-auto xs:px-[20px] xs:py-[30px] lg:py-[40px]">
        <div class="text-center mx-auto justify-center grid content-center">
          <h1 class="xl:text-2xl md:text-2xl mt-7 font-light text-textGray">
            Never Struggle With
            <span class="text-purple font-bold">LineSheets</span> 
            <!-- <vue-writer class="text-purple font-bold inline-block" :array="['LineSheets', 'Catalogs']" /> -->
            Again
          </h1>
          <div>
            <div class="pt-8 xl:text-7xl xs:text-2xl animate inline-block font-bold text-[#333]">
               <vue-writer :array="['Design..', 'Share..', 'Sell..']" />
               <!-- <vue-writer :array="['Design.. Share.. Sell']" /> -->
            </div>            
            <h2 class="text-sm text-textGray xs:pt-2 lg:pt-5">Beautiful LineSheets in a Few Clicks!</h2>
            <div class="pt-8 text-md sm:w-auto lg:w-[600px] sm:px-4 lg:px-0 mx-auto text-textGray">
               <strong> LineSheets Pro  </strong> is an easy-to-use automatic catalog maker for sales reps to create catalogs on the fly, without depending on a designer.
           </div>
             <button class="px-5 py-3 ml-2 xs:mt-[0.3rem] lg:mt-6 h-[50px] text-white xs:w-[auto] lg:w-[15%] absolute xs:left-[30%] lg:left-[40%]
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl"
                                        @click="showModel">Try For Free</button>
          </div>
        </div>
    </div>
    
    <div class="p-3 bg-gray h-[63%] bg-banner hidden lg:block align-bottom bg-contain bg-no-repeat subpixel-antialiased"></div>
    <div class="xs:w-[90%] lg:w-9/12 2xl:w-7/12 mx-auto">
        <div class="xs:my-[3rem] lg:my-[3rem] xs:w-full lg:w-3/5 mx-auto text-center">
            <h3 class="xs:text-xl lg:text-6xl font-black text-header"
            data-aos="fade-right" data-aos-duration="800"
            >
                Just 
                <span class="text-purple"> Drag & Drop! </span>
            </h3>
            <p class="text-textGray xs:text-sm lg:text-base mt-[1rem]"
            data-aos="fade-left" data-aos-duration="800"
            >
                Design, share and sell catalogs in a few clicks without a professional designer. Creating catalogs to driving sales - get all in one place with LineSheets Pro.
            </p>
        </div>
        <div class="grid grid-cols-3">
            <div data-aos="fade-down"
            class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <h4 class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                A <span class="bg-gradient-to-r from-textBackground to-white"> No-Design</span> Tool
               </h4>
               <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                Skip the high fees of designers & the long wait to get high-quality catalogs - because LineSheets Pro gives you both! transform sales by making LineSheets with lightning speed, on the fly!
               </p>
           </div>
           <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-0 lg:col-span-2 hidden lg:block">
               <div class="h-full grid content-center justify-items-end">
               <img data-aos="fade-left" src="./assets/images/grid/nodesigner.png" class="align-middle" alt="No Design Tool">
               </div>
           </div>
                    <div data-aos="fade-right" data-aos-duration="800" class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                             <div class="h-full grid content-center justify-items-start">
               <img src="./assets/images/grid/newfast.png" alt="Faster Turnarounds">
               </div>
          </div>
       <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <p data-aos="fade-down" data-aos-duration="800" class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
               <span class="bg-gradient-to-r from-textBackground to-white">
                   Faster
                   </span>
                Turnarounds 
               </p>
               <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                Never leave your prospects waiting for a revised quote with LineSheets Pro. Edits catalogs on the fly in a few clicks and share them quickly to achieve faster closures and improve brand reputation.
               </p>
           </div>
            <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <p data-aos="fade-down" data-aos-duration="800" class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                Catalog Sharing - 
                <span class="bg-gradient-to-r from-textBackground to-white">
                    Simplified
                    </span> 
               </p>
               <p data-aos="fade-right" data-aos-duration="800" class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                LineSheets Pro enables sales reps to share catalogs as PDFs or web pages as soon as they create it without having to visit them on the ground. This helps save time and expedite sales.
               </p>
           </div>
          <div data-aos="fade-left" data-aos-duration="800" class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                                           <div class="h-full grid content-center justify-items-end">
               <img src="./assets/images/grid/share.png" alt="Catalog Sharing - Simplified">
          </div>
          </div>
            <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block text-center">
                             <div class="h-full grid content-center justify-items-start">
               <img data-aos="fade-right" class="h-[500px]" src="./assets/images/grid/ordermanagement.png"  alt="In-built Order Management">
                             </div>
          </div>
          <div
          data-aos="fade-down" 
          class=" xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <p class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                In-built Order
                <span class="bg-gradient-to-r from-textBackground to-white"> Management</span>
               </p>
               <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                By sharing catalogs as unique web pages, sales reps can get prospects to order directly from the catalog page without visiting the eCommerce portal, thus fast-tracking closures.
               </p>
           </div>           
           
         
 
        <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <p data-aos="fade-down" data-aos-duration="800" class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                               <span class="bg-gradient-to-r from-textBackground to-white">Save
                              </span>

                    More
                 , Sell More
               </p>
               <p data-aos="fade-left" data-aos-duration="800" class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                With sales reps creating catalogs on their own, you can save the budget for graphic designers for other things. And by sharing catalogs directly with prospects, it’s possible to close deals faster and boost revenue.
               </p>
           </div>
          <div data-aos="fade-right" data-aos-duration="800" class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                                           <div class="h-full grid content-center justify-items-end">
               <img class="h-[500px]" src="./assets/images/grid/save.png" alt="Save More, Sell More">
          </div>
          </div>
              <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
            <div class="h-full grid content-center justify-items-start">
               <img data-aos="fade-left" data-aos-duration="800" src="./assets/images/grid/integration.png" alt="Easy Integration">
          </div>
          </div>
        <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
               <p data-aos="fade-down" data-aos-duration="800" 
               class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                <span class="bg-gradient-to-r from-textBackground to-white">
                    Easy
                </span> Integration
               </p>
               <p data-aos="fade-right" data-aos-duration="800"
                class="pt-3 xs:text-sm lg:text-base text-textGray xs:mt-1 lg:mt-4">
                LineSheets Pro is tailor-made for any business! Seamlessly integrate the tool with PIM, ERP & eCommerce systems to provide end-to-end visibility of sales and much more!
               </p>
           </div>
        </div>
    </div>
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo xs:py-10 lg:py-20">
           <div class="w-9/12 mx-auto">
                <div class="grid xs:grid-cols-1 lg:xs:grid-cols-4 gap-2 text-center">
                    <div class="xs:pt-2">
                        <p class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            150+
                        </p>
                        <p class="text-md text-white">
                            Happy Customers
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <p class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            1200+
                        </p>
                        <p class="text-md text-white">
                            Sales Representatives
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <p class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            11,000+
                        </p>
                        <p class="text-md text-white">
                            LineSheets Created
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <p class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            $10M+
                        </p>
                        <p class="text-md text-white">
                            Sales Generated
                        </p>
                    </div>                 
                </div>      
            </div>               
        </div>
       <div class="bg-statsBackground">
        <div class="lg:pt-16 xs:py-5">        
            <p class="uppercase text-xs text-textGray text-center">A BETTER WAY</p>
            <p class="xs:w-[90%] lg:w-[35%] mx-auto xs:text-xl lg:text-3xl text-header font-extrabold text-center">
                Power-packed Features for a Hassle-free Experience</p>
        </div>
        <div class="lg:w-[90%] 2xl:w-[70%] mx-auto grid xs:grid-cols-1 lg:grid-cols-3 gap-2 pb-6">
            <div class="col-span-1 grid content-center">
                <p
                :class="selected == 5 ? 'bg-white border-b-2 border-purpleFrom': 'border-b border-border'" 
                class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                @click="select(5)">
                    Alignments
                    <span
                     :class="selected == 5 ? 'visible' : 'hidden'"
                     class="py-3 text-sm text-textGray block">
                        Defined alignments and margins for impeccable consistence and UX!
                    </span>
                </p>
                <p id="featuresDiv"
                :class="selected == 1 ? 'bg-white border-b-2 border-purpleFrom': 'border-b border-border'" 
                class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                @click="select(1)">
                    Extensive & Easy to Use
                    <span
                     :class="selected == 1 ? 'visible' : 'hidden'"
                     class="py-3 text-sm text-textGray block">
                        Features such as text and shapes to create stunning designs in a few clicks!
                    </span>
                </p>
                <p 
                :class="selected == 2 ? 'bg-white border-b-2 border-purpleFrom': 'border-b border-border'" 
                class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                @click="select(2)">
                    Convert to Cart
                    <span
                     :class="selected == 2 ? 'visible' : 'hidden'"
                     class="py-3 text-sm text-textGray block">
                        Convert products in LineSheets directly to cart items for checkout!
                    </span>
                </p>
                <p 
                :class="selected == 3 ? 'bg-white border-b-2 border-purpleFrom': 'border-b border-border'" 
                class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                @click="select(3)">
                    Download PDF
                    <span
                     :class="selected == 3 ? 'visible' : 'hidden'"
                     class="py-3 text-sm text-textGray block">
                        Download the LineSheets to share with prospects in a single click!
                    </span>
                </p>
                <p 
                :class="selected == 4 ? 'bg-white border-b-2 border-purpleFrom': 'border-b border-border'" 
                class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                @click="select(4)">
                    Analytics
                    <span
                     :class="selected == 4 ? 'visible' : 'hidden'"
                     class="py-3 text-sm text-textGray block">
                        Detailed Analytics for improved visibility and better conversions!
                    </span>
                </p>                
            </div>
            <div class="col-span-2 lg:h-screen 2xl:h-[70vh] grid content-center justify-items-center">
                     <img class="animate-hinge" alt="Alignments | LineSheets Pro"
                     :class="selected == 1 ? 'visible' : 'hidden'"
                     src="./assets/images/grid/texteasy.png">
                     <img class="text-right animate-hinge" 
                     :class="selected == 2 ? 'visible' : 'hidden'"
                     src="./assets/images/grid/convertcart.webp" alt="Convert To Cart | LineSheets Pro">
                     <img class="text-right animate-hinge"
                     :class="selected == 3 ? 'visible' : 'hidden'"
                     src="./assets/images/download.png" alt="Download | LineSheets Pro">
                     <img class="text-right animate-hinge"
                     :class="selected == 4 ? 'visible' : 'hidden'"
                     src="./assets/images/grid/analytics.png" alt="Analytics | LineSheets Pro">
                     <img class="text-right animate-hinge"
                     :class="selected == 5 ? 'visible' : 'hidden'"
                     src="./assets/images/grid/allignment.png" alt="Alignmentss">
            </div>
        </div>
    </div> 
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo xs:pb-10 lg:pb-24 xs:pt-10 lg:pt-20">
            <div class="w-9/12 mx-auto">
                        <p class="xs:text-xl lg:text-3xl text-white font-extrabold text-center" data-aos="fade-right" data-aos-duration="800">Catalog Management Redefined</p>
                         <p 
                         data-aos="fade-left" data-aos-duration="800"
                         class="lg:pt-3 xs:pt-3 pb-16 xs:text-sm lg:text-base xs:w-[90%] lg:w-6/12 mx-auto text-white text-center">
                LineSheets Pro features an intuitive UX, powerful design tools, and drag & drop functionalities that reduces the complex process of catalog management into 3 simple steps:
            </p>
                <div class="grid grid-cols-3 text-center gap-4">
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            widgets
                        </span>
                        <p class="pt-5 text-white text-2xl">Choose</p>
                        <p class="pt-5 text-md text-white">
                            Choose a design template
                        </p>
                    </div>
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            drag_indicator
                            </span>
                            <p class="pt-5 text-white text-2xl">Design</p>
                            <p class="pt-5 text-md text-white">
                                Drag & drop your products
                            </p>
                    </div>
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            share
                            </span>
                            <p class="pt-5 text-white text-2xl">Share</p>
                            <p class="pt-5 text-md text-white">
                                Share with prospects
                            </p>
                    </div>
                    <div class="col-span-3">
                        <button 
                        @click="showModel"
                        class="bg-white rounded hover:bg-purpleFrom font-bold text-purpleFrom
                         hover:text-white border border-white hover:border-white text-xl mt-20 uppercase py-3 px-10 mr-3">
                            Try For Free
                        </button>
                    </div>
                </div>
            </div>
    </div>
      
    <div class="lg:pb-12 xs:pb-3">
        <p class="xs:pt-8 lg:pt-16 col-span-6 text-3xl text-header font-extrabold text-center"
        data-aos="fade-right" data-aos-duration="800"
        >Costs Less than your Quarterly Coffee Subscription</p>
        <p 
        data-aos="fade-right" data-aos-duration="800"
        class="xs:pb-8 lg:pb-16 pt-2 pb-8 xs:text-sm lg:text-base xs:w-[90%] md:[90%] lg:w-9/12 mx-auto text-textGray text-center">
                        LineSheets Pro is super affordable with unique pricing packages to meet diverse business needs. Check them out below or simply ask for a
                         <a href="#" class="text-purple hover:underline-offset-1"> Custom Quote</a>
                     </p>
        <div class="xs:w-[90%] lg:w-5/6 mx-auto grid xs:grid-cols-1 lg:grid-cols-4 gap-2 content-center justify-center justify-items-center pt-10">
               <div class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                <p class="text-md text-textGray">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $0
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Want to Try LineSheets Pro
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button
                     @click="showModel"
                      class="px-5 py-2 ml-2 mt-5 w-full text-white 
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get Started</button>
                </div>
            </div>
             <div class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                <p class="text-md text-textGray">Basic</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $29
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Ideal for Small Businessess
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  1,000 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  Unlimited LineSheets
                </p>
                <div class="text-left">                
                    <!-- <button class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4"
                    @click="showModel">
                                Get Started
                    </button> -->
                     <button
                     @click="showModel"
                      class="px-5 py-2 ml-2 mt-5 w-full text-white 
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get Started</button>
                </div>
            </div>
             <div class="h-[28rem] lg:w-60 xs:w-[90%] 
          bg-purpleFrom
           xs:mt-5 rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7" style="margin-top: -20px">
                <p class="text-md text-white">Pro</p>
                <p class="pt-3">
                    <span class="text-4xl text-white font-bold">
                        $89
                    </span>
                    <span class="text-sm text-white font-light">/Month</span>
                </p>
                <p class="text-white text-md pt-5">
                        Ideal for expanding businesses
                </p>
                <p class="text-white text-sm pt-5">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  5 Users
                </p>
                <p class="text-white text-sm pt-4">
                     <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10,000 SKU's
                </p>
                <p class="text-white text-sm pt-4">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  Custom Templates
                </p>
                <p class="text-white text-sm pt-4">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  Unlimited LineSheets
                </p>
                <div class="text-left">                    
                    <button class="bg-white font-bold text-purple 
                     border border-purpleFrom rounded-3xl px-5 py-2 ml-2 mt-5 w-full"
                    @click="showModel"
                    >
                        Get Started
                    </button>
                </div>
            </div> 
            
            <div id="priceDiv" class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                <p class="text-md text-textGray">Business</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $149
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Ideal for established businesses
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  10 Users
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  25,000 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  Unlimited Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  Unlimited LineSheets
                </p>
                <div class="text-left">                
                   <button
                     @click="showModel"
                      class="px-5 py-2 ml-2 mt-5 w-full text-white 
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get Started</button>
                </div>
            </div>
           </div>
    </div>
     <div class="bg-bannerdark bg-cover h-[65%] grid content-center my-5">
        <div class="lg:w-9/12 xs:w-[90%] mx-auto text-center">
             <p class="text-white font-bold lg:text-4xl xs:text-xl">
                Never Struggle with Catalogs Again
             </p>
             <p class="lg:pt-4 xs:pt-1 text-white font-bold lg:text-2xl xs:text-xl">
                Create. Share. Sell. All on the fly. Without any designers.
             </p>
             <button class="bg-white rounded hover:bg-purple text-purple font-bold hover:text-white border-0 hover:border-purple 
             lg:mt-14 xs:mt-6 py-3 px-4 mr-3"
             @click="showModel"
             >
               Try For Free
            </button>
        </div>
    </div>
    <div class="xs:w-[90%] lg:w-9/12 mx-auto">
        <p class="pt-10 col-span-6  xs:text-xl lg:text-3xl text-header font-extrabold text-center"
        data-aos="fade-right" data-aos-duration="800"
        >
            Loved by Sales Folks from all Walks of Business
        </p>
         <p class="pb-8 xs:pt-3 xs:text-sm lg:text-base xs:w-[90%] lg:w-6/12 mx-auto text-textGray text-center"
         data-aos="fade-left" data-aos-duration="800"
         >
                Check out what our users have to say about LineSheets Pro.
            </p>
        <!-- <img src="./assets/images/testimonial.svg" alt=""> -->
        <div class="grid grid-rows-3 grid-cols-3 gap-7 pb-16">
            <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3"
            data-aos="fade-right" data-aos-duration="800"
            >
             <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Robin Williams</p>
                    <p class="pt-1 text-xs text-blue-700">VP Sales</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">
                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 “An amazing tool, I just build digital line sheets in seconds and share it with all prospets. 
                 Extremely easy to use and share! Would recommend it as the go to tool for any sales rep!”
            </p>                 
            </div>                         
            <div class="col-span-1 hidden lg:block">

            </div>
              <div class="col-span-1 hidden lg:block">

            </div>
            <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3"
            data-aos="fade-left" data-aos-duration="800"
            >
            <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Dan Williams</p>
                    <p class="pt-1 text-xs text-blue-700">Director, Growth & Strategy</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">
                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 “LineSheets Pro has definitely helped us improve our closure rates. The sales team is quick to make pricing and product edits in the line sheets without relying on designers and send to prospects to start ordering. I totally recommend it!”
            </p>                     
            </div>                         
            <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3"
            data-aos="fade-right" data-aos-duration="800"
            >
          <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Kevin Morgan</p>
                    <p class="pt-1 text-xs text-blue-700">CMO</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">

                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 “LineSheets Pro reduced our dependency with designers and enabled us to accelerate our field visits. Edit option of the product data is a super useful feature for our team. ”
            </p>                   
            </div>                         
            <div class="col-span-1 hidden lg:block">
            </div>
        </div>        
    </div>
    
    <!-- <div class="lg:py-6 xs:py-3">
        <div class="lg:w-9/12 xs:w-[90%] mx-auto text-center grid grid-cols-2 content-start">
        <p class="text-titleHeader text-left xs:text-xs lg:text-sm">SellersCommerce © 2022</p>
        <p class="text-titleHeader text-right xs:text-xs lg:text-sm">            
            <a href="">Have a query?</a>
        </p>        
        </div>
    </div> -->
    <div class="relative mt-20">
    <div class="bg-white overflow-hidden xs:h-auto lg:h-[142px] shadow-custom p-9 rounded-xl w-[90%] mx-auto lg:absolute top-[1.5rem] left-[5%]">
          <div class="grid xs:grid-cols-5 lg:grid-cols-6">
                <div class="cols-span-1 hidden lg:block">
                     <img class="footerImg" src="./assets/images/grid/ls.png" alt="LineSheets Pro Logo">
                </div>
                <div class="col-span-4 grid content-center">
                    <p class="text-header text-3xl font-bold">Never Struggle With Catalogs Again</p>
                    <p class="pt-3 text-xs">Create. Share. Sell. All on the fly. Without any designers.</p>
                </div>
                <div class="col-span-1 grid content-center">
                     <button class="bg-gradient-to-r from-purpleFrom 
                     via-purpleFrom to-purpleTo rounded-lg tracking-wide font-bold
                      text-white text-md xs:text-xs lg:text-lg py-4 px-8"
                      @click="showModel">
                    Get Started
                </button>
                </div>
          </div>
    </div>
    <div class="bg-footerDiv h-[45vh]">
      <div class="lg:py-6 xs:py-3 text-white">
        <div class="w-[90%] mx-auto text-center grid xs:grid-cols-1 lg:grid-cols-2 content-start absolute bottom-5 left-[5%]">
            <div class="">
                 <p><img class="w-48" src="./assets/images/grid/sc-white.svg" alt="SellersCommerce Logo | LineSheets Pro"></p>
                 <p class="font-extrabold text-white text-sm text-left mt-3">
                     © 2022 LineSheets Pro | 
                    <a href="https://www.sellerscommerce.com/privacypolicy" target="_blank"> Privacy Policy  </a> | 
                    <a href="https://www.sellerscommerce.com/termsandconditions" target="_blank"> Terms </a>
                 </p>                 
            </div>
            <div class="grid content-center text-right hidden lg:block">
            <p>
                <a href="https://twitter.com/sellerscommerce" target="_blank" class="inline-block mr-5 cursor-pointer align-middle">
                     <img src="https://az777500.vo.msecnd.net/images/3554/twitter3.png" alt="Twitter">
                </a>  
                <a href="https://www.linkedin.com/company/sellers-commerce/mycompany/" target="_blank" class="inline-block mr-5 cursor-pointer align-middle">
                     <img src="https://az777500.vo.msecnd.net/images/3554/linkedin2.png" alt="LinkedIn">
                </a> 
                <a href="https://www.facebook.com/sellerscommerce" target="_blank" class="inline-block mr-5 cursor-pointer align-middle">
                     <img src="https://az777500.vo.msecnd.net/images/3554/facebook-logo.png" alt="Facebook">
                </a> 
                <a href="https://www.youtube.com/user/sellerscommerce" target="_blank" class="inline-block mr-5 cursor-pointer align-middle">
                     <img src="https://az777500.vo.msecnd.net/images/3554/youtube-last-2.png" alt="Youtube">
                </a>                              
            </p>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>

<div class="h-screen w-full bg-blacktransperant absolute top-0 bg-signupDiv" :class="isModel ? 'visible overflow-hidden' : 'hidden'"
        >
        <p class="absolute top-3 right-3 cursor-pointer z-10" @click="isModel = false">
            <span class="text-white text-6xl material-symbols-outlined">
                cancel
            </span>
        </p>
        <div class="h-screen grid xs:grid-cols-1 lg:grid-cols-3">
            <div class="col-span-1 h-full grid content-center px-5 animate__animated animate__bounceInLeft">
                <p class="text-white text-5xl font-extrabold">
                    Sign up for FREE
                </p>
                <p class="text-white text-xl font-bold pt-2">
                    Start using LineSheets Pro in seconds!
                </p>
            </div>
            <div class="col-span-2 h-full grid  xs:content-start lg:content-center px-5 animate__animated animate__bounceInRight">
                <!-- <div class="grid grid-cols-3">
              <div class="col-span-2">
                  <input type="text" class="px-5 py-10 w-[70%] rounded-3xl h-[50px] bg-white inline-block" placeholder="Enter your email">
              </div>              
              <div>
                   <button class="px-5 py-3 h-[50px] bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">SignUp</button>
              </div>              
              </div> -->
                <div class="col-span-2 flex flex-auto relative bg-transparent">
                    <input type="text" class="px-5 py-10 xs:w-[90%] lg:w-[50%] rounded-3xl h-[50px] bg-white inline-block"
                        placeholder="Enter your email" required>
                    <a
                    href="https://app.linesheetspro.com/signup" target="_blank"
                        class="px-5 py-4 ml-2 mt-3 text-white xs:w-[30%] lg:w-[15%] absolute xs:left-[53%] lg:left-[33%]
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl"
                   >
                   Register</a>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-blacktransperant absolute top-0"
        :class="isContact ? 'visible overflow-hidden' : 'hidden'">
         <p class="absolute top-3 right-3 cursor-pointer z-10" @click="isContact = false">
            <span class="text-white text-6xl material-symbols-outlined">
                cancel
            </span>
        </p>
        <div class="w-[50%] mx-auto bg-white mt-5 p-10">
             <hubspotform></hubspotform>
        </div>
        
    </div>
</template>

<style>
.footerImg{
    transform: rotate(309deg);
    margin-left: -30px;
    height: 67px;
}
.material-symbols-outlined:hover{
    transition: 0.9s;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}
.bg-signupDiv{
    background: url(/src/assets/images/bg-signup.svg) no-repeat 0 50%/890px;
}
.bg-footerDiv{
    background: url(/src/assets/images/grid/footerbanner.svg) no-repeat;
    background-position: 50% 40px;
    background-size: 1793px;
}
.animate-hinge{
     display: inline-block;
  margin: 0 0.5rem;

  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
.animate-jello{
    display: inline-block;
  margin: 0 0.5rem;

  animation: jello; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
.typed-cursor{
            font-size: 50px;
        }
.material-symbols-outlined {
    font-size: 32px;
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fastest {
  transition-duration: 75ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.transition-slow {
  transition-duration: 300ms;
}
.transition-slower {
  transition-duration: 500ms;
}
.transition-slowest {
  transition-duration: 700ms;
}

.transition-all {
  transition-property: all;
}
.transition-opacity {
  transition-property: opacity;
}
.transition-transform {
  transition-property: transform;
}

.focus-visible.focus-visible\:underline {
  text-decoration: underline;
}

</style>
