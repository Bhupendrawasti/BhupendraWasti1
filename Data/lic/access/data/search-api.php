<?php
// Enable CORS for your website
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get the license number from request
$licenseNumber = isset($_GET['lic']) ? $_GET['lic'] : '';

if (empty($licenseNumber)) {
    echo json_encode(['error' => 'License number required']);
    exit;
}

// Path to your JSON file
$jsonFile = 'licenseprintjhapa.json';

// Check if file exists
if (!file_exists($jsonFile)) {
    echo json_encode(['error' => 'Database file not found']);
    exit;
}

// Read and search (optimized for large files)
$handle = fopen($jsonFile, 'r');
$found = null;
$buffer = '';

while (!feof($handle)) {
    $buffer .= fread($handle, 8192); // Read 8KB chunks
    
    // Look for license pattern
    if (strpos($buffer, '"lic":"' . $licenseNumber . '"') !== false) {
        // Found it - extract the record
        $start = strpos($buffer, '{', strpos($buffer, '"lic":"' . $licenseNumber . '"'));
        $end = strpos($buffer, '}', $start);
        $jsonRecord = substr($buffer, $start, $end - $start + 1);
        $found = json_decode($jsonRecord, true);
        break;
    }
    
    // Keep last 1000 chars for boundary
    if (strlen($buffer) > 100000) {
        $buffer = substr($buffer, -100000);
    }
}
fclose($handle);

if ($found) {
    echo json_encode($found);
} else {
    echo json_encode(['not_found' => true, 'lic' => $licenseNumber]);
}
?>
