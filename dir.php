var files = <?php $out = array();
foreach (glob('gallery/*.jpg') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;