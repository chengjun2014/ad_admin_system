import axios from 'axios';



// test env
// let base = 'http://169.56.130.93:50050/dsp_api';
let base = 'http://123.206.16.44:50050/dsp_api';
// let base = 'http://127.0.0.1:50050/dsp_api';
// pro env
// let base = 'http://169.56.130.93:50080/dsp_api';

axios.defaults.auth = {
    username: sessionStorage.getItem("token"),
    password: ''
}
export const baseurl = base;

export const requestLogin = params => { return axios.post(`${base}/customer/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getIdsCategoryList = params => { return axios.get(`${base}/idscategory/list`, { params: params }); };

export const getInfoSum = params => { return axios.post(`${base}/info/sum`, params); };

export const getInfoSum1 = params => { return axios.post(`${base}/info/sum1`, params); };

export const getCampaignList = params => { return axios.post(`${base}/campaign/list`, params); };

export const campaignSelect = params => { return axios.post(`${base}/campaign/select`, params); };

export const adgroupSelect = params => { return axios.post(`${base}/adgroup/select`, params); };

export const addCampaign = params => { return axios.post(`${base}/campaign/add`, params); };

export const editCampaign = params => { return axios.post(`${base}/campaign/modify`, params); };

export const getCampaignSettingList = params => { return axios.post(`${base}/cmpnsetting/list`, params); };

export const addCampaignSetting = params => { return axios.post(`${base}/cmpnsetting/add`, params); };

export const editCampaignSetting = params => { return axios.post(`${base}/cmpnsetting/modify`, params); };

export const getCreativeList = params => { return axios.post(`${base}/creative/list`, params); };

export const getCreativeEls = params => { return axios.post(`${base}/crtelement/list`, params); };

export const addCreative = params => { return axios.post(`${base}/creative/add`, params); };
export const editCreative = params => { return axios.post(`${base}/creative/modify`, params); };

export const campaignQuery = params => { return axios.post(`${base}/campaign/query`, params); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const register = params => { return axios.post(`${base}/customer/register`, params); };

export const getCustomer = params => { return axios.post(`${base}/customer/list`, params); };

export const customerModify = params => { return axios.post(`${base}/customer/modify`, params); };

export const getAdgroupList = params => { return axios.post(`${base}/adgroup/list`, params); };

export const getAdgroupID = params => { return axios.post(`${base}/adgroupid/get`, params); };

//export const addAdgroup = params => { return axios.post(`${base}/adgroup/add`,  params ); };

export const editAdgroup = params => { return axios.post(`${base}/adgroup/modify`, params); };

export const getAccountList = params => { return axios.post(`${base}/account/list`, params); };

export const getHomepageList = params => { return axios.post(`${base}/homepage/list`, params); };

export const HomepageAdd = params => { return axios.post(`${base}/homepage/add`, params); };

export const HomepageModify = params => { return axios.post(`${base}/homepage/modify`, params); };

// 资质列表
export const getFileList = params => { return axios.post(`${base}/qualifyfile/list `, params); };
// 删除资质文件
export const delFile = params => { return axios.post(`${base}/qualifyfile/delete `, params); };
// 添加文件
export const addFile = params => { return axios.post(`${base}/qualifyfile/upload `, params); };




// 添加文件
export const addAd = params => { return axios.post(`${base}/feed/add`, params); };
// 编辑
export const editAd = params => { return axios.post(`${base}/feed/changevalue`, params); };

export const delAd = params => { return axios.post(`${base}/feed/modify`, params); };
//创意列表
export const adList = params => { return axios.post(`${base}/feed/list`, params); };


export const addAdgroup = params => { return axios.post(`${base}/add/cread`, params); };

export const sendPWD2Email = params => { return axios.post(`${base}/find/passwd`, params); };

export const getReport = params => { return axios.post(`${base}/report/detail`, params); };

// export const getTopRet = params => { return axios.post(`${base}/report/topsort`,  params ); };
export const adstatusmodify = params => { return axios.post(`${base}/adgroup/modifystatus`, params); };

export const getOneDayEffect = params => { return axios.post(`${base}/report/onedayeffect`, params); };

export const getMultiDayEffect = params => { return axios.post(`${base}/report/dayseffect`, params); };

export const getDaysAllDim = params => { return axios.post(`${base}/report/daysalldim`, params); };

export const getOneDayAllDim = params => { return axios.post(`${base}/report/onedayalldim`, params); };