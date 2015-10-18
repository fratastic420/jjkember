<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class ArticleRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		$rules = [
			'author' => 'required|min:5',
			'title' => 'required|min:5|unique:artworks',
			'auximages' => 'array',
			'tags' => 'array',
			'text' => 'required',
			'mainimage' => 'required',
			'mainimageid' => 'required|integer',
			'timestamp' => 'required|date'
		];
		return $rules;
	}

}
