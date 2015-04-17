<?php

define('COUNTRY_CODE', 1);
define('WEBAPI_USER_LOGIN', 'gafgarion_pl');
define('WEBAPI_USER_ENCODED_PASSWORD', base64_encode(hash('sha256', '7edd5d941cbf5f64', true)));
define('WEBAPI_KEY', '84656898');
define('SANDBOX_KEY', 's7edd5d9');

define('SOAP', 'https://webapi.allegro.pl/service.php?wsdl');
define('SANDBOX', 'https://webapi.allegro.pl.webapisandbox.pl/service.php?wsdl');
 
$options['features'] = SOAP_SINGLE_ELEMENT_ARRAYS;
try {
    $soapClient = new SoapClient(SANDBOX, $options);
    $request = array(
        'countryId' => COUNTRY_CODE,
        'webapiKey' => SANDBOX_KEY  //WEBAPI_KEY
    );
    $result = $soapClient->doQueryAllSysStatus($request);
 
    $versionKeys = array();
    foreach ($result->sysCountryStatus->item as $row) {
        $versionKeys[$row->countryId] = $row;
    }
 
// WYGRANE OFERTY //
    $request = array(
        'userLogin' => WEBAPI_USER_LOGIN,
        'userHashPassword' => WEBAPI_USER_ENCODED_PASSWORD,
        'countryCode' => COUNTRY_CODE,
        'webapiKey' => SANDBOX_KEY, //WEBAPI_KEY,
        'localVersion' => $versionKeys[COUNTRY_CODE]->verKey,
    );
    $session = $soapClient->doLoginEnc($request);
 
    $request = array(
        'sessionId' => $session->sessionHandlePart,
        'pageSize' => 50
    );
 
    $myWonItems = $soapClient->doGetMyWonItems($request);
    echo'<pre>';var_dump($myWonItems);echo'</pre>';
 
// WSZYSTKIE OFERTY / LISTINGI
$dogetitemslist_request = array(
   'webapiKey' => SANDBOX_KEY,
   'countryId' => 1,
'filterOptions' => array(
     array(
      'filterId' => 'category',
	'filterValueId' => array('3')
	))
);

$list = $soapClient->doGetItemsList($dogetitemslist_request);
echo'<pre>';var_dump($list);echo'</pre>';

} catch(Exception $e) {
    echo $e;
}
