<?php
header('content-type:text/html;charset=utf-8');
class todoWeather
{
    public function info($key)
    {
        $ipInfo = $this->ipInfo($key);
        $city = $ipInfo->adcode;
        $weatherInfo = $this->weatherInfo($key, $city);
        return $weatherInfo;
    }
    public function ipInfo($key)
    {
        $ch = curl_init("http://restapi.amap.com/v3/ip?key=" . $key);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $info = json_decode($result);
        return $info;
    }
    public function weatherInfo($key, $city)
    {
        $ch = curl_init("http://restapi.amap.com/v3/weather/weatherInfo?city=" . $city . "&key=" . $key . "&extensions=all");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $info = json_decode($result)->forecasts[0];
        return $info;
    }
}
function unicode_decode($unicode)
{
    $json = '{"str":"' . $unicode . '"}';
    $arr = json_decode($json, true);
    if (empty($arr)) return '';
    return $arr['str'];
}
$weather = new todoWeather;
$key = '71bbf31a7e650fb722a34632b8ef6244';
$weatherjson = $weather->info($key);
$casts = $weatherjson->casts;
echo unicode_decode($weatherjson->province);
echo unicode_decode($weatherjson->city);
echo json_encode($weatherjson);
