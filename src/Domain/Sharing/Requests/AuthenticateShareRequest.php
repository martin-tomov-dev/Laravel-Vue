<?php
namespace Domain\Sharing\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticateShareRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'password'       => 'required|string',
            'passwordShow'   => 'string',
        ];
    }
}
